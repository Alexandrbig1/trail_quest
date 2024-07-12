import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import { useEffect } from "react";
import {
  ContactContainer,
  ContactWrapper,
  FormWrapper,
} from "./Contact.styled";
import Form from "../UI/Form/Form";
import HeadingSection from "../UI/Heading/Heading";

function Contact() {
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
          <HeadingSection>Contact</HeadingSection>
          <Form />
        </FormWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
