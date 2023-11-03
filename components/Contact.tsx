import React from "react";
import SectionComponent from "./SectionComponent";
import SectionHeader from "./SectionHeader";
import ContactForm from "./contact-form";

const ContactMe: React.FC = () => {
  return (
    <SectionComponent id="contact" section="Contact">
      <SectionHeader title="Contact Me" />
      <ContactForm />
    </SectionComponent>
  );
};

export default ContactMe;
