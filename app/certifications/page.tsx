import Link from "next/link";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { certificationsData } from "@/Constants";

const CertificationsPage = () => {
  return (
    <div className="py-10 md:py-16">
      <PageLayout>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-lightPurple">
            Learning journey
          </p>
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Certifications
          </h1>
          <p className="mt-4 text-white/60">
            A collection of certifications and credentials I have earned.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {certificationsData.map((certification) => (
            <article
              key={`${certification.title}-${certification.issuer}`}
              className="group rounded-lg border border-lightPurple/20 bg-bodyColor p-6 transition-colors duration-300 hover:border-lightPurple/50 hover:bg-lightPurple/5"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-lightPurple/30 bg-lightPurple/10 text-lightPurple">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </div>
                {certification.date && (
                  <p className="text-sm text-white/50">{certification.date}</p>
                )}
              </div>

              <h2 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-lightPurple">
                {certification.title}
              </h2>
              <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-md border border-lightPurple/15 bg-black/20">
                <Image
                  src={certification.image}
                  alt={certification.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-lightPurple/80">
                {certification.issuer}
              </p>
              {certification.description && (
                <p className="mt-5 leading-7 text-white/60">
                  {certification.description}
                </p>
              )}
              {certification.credentialUrl && (
                <Link
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-lightPurple transition-colors hover:text-white"
                >
                  View credential
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default CertificationsPage;
