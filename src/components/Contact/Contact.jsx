import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import { useEffect } from "react";

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
    <div id="contact" ref={contactRef}>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Contact</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa!</p>
    </div>
  );
}

export default Contact;
