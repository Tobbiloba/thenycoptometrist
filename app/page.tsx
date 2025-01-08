import React from "react";
import HeroSection from "./components/hero/hero";
import Description from "./components/description";
import CredentialsAndLocations from "./components/credentital";
import ComparisonComponent from "./components/comparison";
import Services from "./components/services";
import ContactForm from "./components/contact-us";
import LenisWrapper from "@/lib/lenis-wrapper";
const Page = () => {
  return (
    <LenisWrapper>
      <div className="bg-alabaster">
        <HeroSection />
        <Description />
        <CredentialsAndLocations />
        <Services />
        <ComparisonComponent />
        <ContactForm />
      </div>
    </LenisWrapper>
  );
};

export default Page;
