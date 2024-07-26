import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { MobileHeaderMenu, MobileOverlay } from "./Header.styled";
import MenuBurgerItems from "./MenuBurgerItems";

function MobileHeader() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <MobileHeaderMenu>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          rounded
          color="#fff"
        />
      </MobileHeaderMenu>

      {isOpen && (
        <MobileOverlay $isOpen={isOpen} onClick={() => setOpen(false)}>
          <MenuBurgerItems />
        </MobileOverlay>
      )}
    </>
  );
}

export default MobileHeader;
