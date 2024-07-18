import { useEffect, useState } from "react";
import { ScrollBtnIcon, ScrollButton } from "./ScrollBtn.styled";

export default function ScrollBtn() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScrollEvent() {
    setIsVisible(window.scrollY > 300);
  }

  function handleScrollUpBtnClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div>
      <ScrollButton
        type="button"
        onClick={handleScrollUpBtnClick}
        $visible={isVisible}
      >
        <ScrollBtnIcon />
      </ScrollButton>
    </div>
  );
}
