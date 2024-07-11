import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import { useEffect } from "react";
import { ContactContainer, ContactWrapper } from "./Contact.styled";

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
      <ContactWrapper>hi</ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
