"use client";

import Logo from "./TopNavbar";
import NavbarLink from "./NavbarLink";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar fixed top-0 left-0 w-full py-6 z-50 px-2 bg-white">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <Logo />
          <NavbarLink active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
