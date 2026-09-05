"use client";

import { useEffect, useRef, useState } from "react";

type Palette = {
  light: string;
  mid: string;
  dark: string;
  darkest: string;
  eye: string;
};

type PixelPetProps = {
  /** Size of one "pixel" in CSS px. Bigger = chunkier pet. Default 4. */
  pixelSize?: number;
  /** 0–1. Higher = snappier follow, lower = lazier/floatier. Default 0.12. */
  followSpeed?: number;
  /** How far (px) the pet trails behind the cursor. Default { x: 26, y: 22 }. */
  offset?: { x: number; y: number };
  /** Override the 4 contribution-graph shades + eye color. */
  palette?: Palette;
  /** Extra class names for the wrapping fixed container. */
  className?: string;
  /** Hide the pet on touch devices, which have no real cursor. Default true. */
  hideOnTouch?: boolean;
};

// ---- Sprite data ----------------------------------------------------
// 0 = transparent, 1-4 = palette shades (light -> darkest), 5 = eye.
// Idle (open/blink) + walk (A/B) frames; legs alternate while moving.

const FRAME_IDLE_OPEN = [
  [0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 2, 2, 2, 2, 2, 1, 0],
  [1, 2, 2, 5, 2, 5, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 3, 2, 2, 2, 3, 2, 1],
  [0, 1, 2, 2, 2, 2, 2, 1, 0],
  [0, 0, 3, 0, 0, 0, 3, 0, 0],
  [0, 0, 4, 0, 0, 0, 4, 0, 0],
];

const FRAME_IDLE_BLINK = FRAME_IDLE_OPEN.map((row, i) =>
  i === 2 ? [1, 2, 2, 2, 2, 2, 2, 2, 1] : [...row],
);

const FRAME_WALK_A = FRAME_IDLE_OPEN.map((row, i) => {
  if (i === 6) return [0, 3, 0, 0, 0, 0, 0, 3, 0];
  if (i === 7) return [0, 4, 0, 0, 0, 0, 0, 4, 0];
  return [...row];
});

const FRAME_WALK_B = FRAME_IDLE_OPEN.map((row, i) => {
  if (i === 6) return [0, 0, 0, 3, 0, 3, 0, 0, 0];
  if (i === 7) return [0, 0, 0, 4, 0, 4, 0, 0, 0];
  return [...row];
});

const DEFAULT_PALETTE: Palette = {
  light: "#d8b4fe",
  mid: "#a855f7",
  dark: "#9333ea",
  darkest: "#6b21a8",
  eye: "#0d1117",
};

function colorFor(value: number, p: Palette): string | null {
  switch (value) {
    case 1:
      return p.light;
    case 2:
      return p.mid;
    case 3:
      return p.dark;
    case 4:
      return p.darkest;
    case 5:
      return p.eye;
    default:
      return null;
  }
}

// ---- Component ------------------------------------------------------

export default function PixelPet({
  pixelSize = 4,
  followSpeed = 0.12,
  offset = { x: 26, y: 22 },
  palette = DEFAULT_PALETTE,
  className = "",
  hideOnTouch = true,
}: PixelPetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const facing = useRef<1 | -1>(1);
  const rafId = useRef<number | null>(null);

  const [frame, setFrame] = useState<number[][]>(FRAME_IDLE_OPEN);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  // Hide on touch devices (no real cursor to follow).
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (hideOnTouch && isTouch) setVisible(false);
  }, [hideOnTouch]);

  // Track the cursor.
  useEffect(() => {
    if (!visible) return;
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!ready) {
        // Snap to the cursor on first move instead of flying in from (0,0).
        pos.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
        setReady(true);
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [visible, ready, offset.x, offset.y]);

  // Follow loop — updates the DOM node directly via ref every frame
  // instead of calling setState, so this stays smooth at 60fps.
  useEffect(() => {
    if (!visible) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const step = () => {
      const dx = target.current.x - offset.x - pos.current.x;
      const dy = target.current.y - offset.y - pos.current.y;
      const speed = reducedMotion ? 1 : followSpeed;

      pos.current.x += dx * speed;
      pos.current.y += dy * speed;

      if (Math.abs(dx) > 1) facing.current = dx > 0 ? 1 : -1;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scaleX(${facing.current})`;
      }
      rafId.current = requestAnimationFrame(step);
    };
    rafId.current = requestAnimationFrame(step);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible, followSpeed, offset.x, offset.y]);

  // Walk-cycle / blink animation, decoupled from the follow loop.
  useEffect(() => {
    if (!visible) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setFrame(FRAME_IDLE_OPEN);
      return;
    }

    let walkToggle = false;
    let idleCounter = 0;

    const interval = setInterval(() => {
      const dx = target.current.x - offset.x - pos.current.x;
      const dy = target.current.y - offset.y - pos.current.y;
      const moving = Math.hypot(dx, dy) > 4;

      if (moving) {
        walkToggle = !walkToggle;
        setFrame(walkToggle ? FRAME_WALK_A : FRAME_WALK_B);
        idleCounter = 0;
      } else {
        idleCounter += 1;
        // Blink roughly every ~1.6s of idling.
        setFrame(idleCounter % 8 === 0 ? FRAME_IDLE_BLINK : FRAME_IDLE_OPEN);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [visible, offset.x, offset.y]);

  if (!visible) return null;

  const rows = frame.length;
  const cols = frame[0].length;

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`fixed left-0 top-0 z-[9999] pointer-events-none ${className}`}
      style={{
        opacity: ready ? 1 : 0,
        transition: "opacity 0.2s ease",
        willChange: "transform",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${pixelSize}px)`,
        }}
      >
        {frame.flatMap((row, r) =>
          row.map((value, c) => {
            const color = colorFor(value, palette);
            return (
              <div
                key={`${r}-${c}`}
                style={{
                  width: pixelSize,
                  height: pixelSize,
                  backgroundColor: color ?? "transparent",
                  borderRadius: color ? 1 : 0,
                }}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}
