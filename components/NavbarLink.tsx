"use client";

import Link from "next/link";
import { useEffect } from "react";

type NavbarLinkProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavbarLink({ active, setActive }: NavbarLinkProps) {
  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  const handleClose = () => {
    setActive(false);
  };

  // 🔒 Lock scroll saat menu aktif
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      <div className="w-2/3 flex items-center justify-end md:justify-between ">
        {/* ================= MENU ================= */}
        <ul
          className={`
    flex flex-col items-center justify-center gap-12
    fixed top-20 left-0 right-0 bottom-0
    bg-blue-500
    w-full
    py-10
    text-white
    transition-all duration-300

    ${active ? "flex opacity-100" : "hidden opacity-0"}

    md:flex md:static md:flex-row md:justify-start
    md:bg-transparent md:w-auto md:py-0
    md:text-black md:opacity-100 z-50
  `}
        >
          <li>
            <Link href="/" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/why-us" onClick={handleClose}>
              Why Us?
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={handleClose}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/tracking" onClick={handleClose}>
              Tracking
            </Link>
          </li>
        </ul>

        {/* ================= BUTTON ================= */}
        <div
          className={`
            fixed bottom-6 left-1/2 -translate-x-1/2
            w-[90%]
            md:static md:translate-x-0 md:w-auto
            transition-all duration-300
            ${active ? "opacity-100 visible" : "opacity-0 invisible"}
            md:opacity-100 md:visible
            z-50
          `}
        >
          <button
            className={`
            
    w-full md:w-auto
    px-4 py-3
    rounded-2xl
    transition-all duration-300

    ${active ? "bg-white text-blue-500 shadow-lg" : "bg-blue-500 text-white"}

    md:bg-blue-500
    md:text-white
    md:shadow-none
  `}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* ================= HAMBURGER ================= */}
      <div
        className="md:hidden block z-50 cursor-pointer"
        onClick={handleToggle}
      >
        <i
          className={`${
            active ? "ri-close-line" : "ri-menu-3-line"
          } ri-2x font-bold`}
        ></i>
      </div>
    </>
  );
}

export default NavbarLink;
