"use client";

import Logo from "./TopNavbar";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar py-4 z-50">
      <div className="container mx-auto px-4 pt-4">
        <div className="flex md:flex-row flex-col items-center justify-between bg-white mx-auto">
          <Logo />
          <div className="w-full flex md:flex-row flex-col  md:items-center justify-end">
            {/* ================= MENU ================= */}
            <ul
              className={`
                flex flex-row  gap-12 py-2 md:py-0 mx-auto
            `}
            >
              <li>
                <Link href="/why-us">Why Us?</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/tracking">Tracking</Link>
              </li>
            </ul>

            <div className="mx-auto">
              <div className="flex gap-2 text-center">
                <i className="ri-copyright-line"></i>2026 Freeze Logistics Pty
                Ltd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
