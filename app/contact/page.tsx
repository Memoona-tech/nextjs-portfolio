import ContactForm from "@/components/contactForm";
import Container from "@/components/container";
import PageLayout from "@/components/PageLayout";
import { Phone, Mail, MapPinCheck } from "lucide-react";
import React from "react";

const infoData = [
  {
    title: "Phone",
    details: "",
    icon: <Phone />,
  },
  {
    title: "Email",
    details: "shaelcore@gmail.com",
    icon: <Mail />,
  },
  {
    title: "Address",
    details: "Lagos, Nigeria",
    icon: <MapPinCheck />,
  },
];

const contactPage = () => {
  return (
    <PageLayout>
      <Container className="py-6 md:py-12 flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-2/3">
          {" "}
          <ContactForm />{" "}
        </div>

        <div>
          <div className="w-full md:w-1/3 flex flex-col justify-center gap-4 md:gap-8">
            {infoData?.map((item) => (
              <div className="flex items-center space-x-4" key={item?.title}>
                <span className="bg-lightSky/10 p-3 border rounded-lg border-hoverColor/10 text-hoverColor">
                  {item?.icon}
                </span>

                <div>
                  <h3 className="text-white/60 font-semibold">{item?.title}</h3>
                  <p className="text-white/60 whitespace-nowrap">
                    {item?.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PageLayout>
  );
};

export default contactPage;
