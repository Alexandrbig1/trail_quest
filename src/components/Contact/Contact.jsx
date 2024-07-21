import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import React, { useEffect } from "react";
import Form from "../UI/Form/Form";
import HeadingSection from "../UI/Heading/Heading";
import {
  ContactContainer,
  ContactWrapper,
  FormWrapper,
} from "./Contact.styled";

const Contact = React.memo(() => {
  const { setActiveSection } = useActiveSection();

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (contactInView) {
      setActiveSection("Contact");
    }
  }, [contactInView, setActiveSection]);

  return (
    <ContactContainer id="contact" ref={contactRef}>
      <ContactWrapper>
        <FormWrapper>
          <HeadingSection>Start Booking now!</HeadingSection>
          <Form />
        </FormWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
});

Contact.displayName = "Contact";

export default Contact;
