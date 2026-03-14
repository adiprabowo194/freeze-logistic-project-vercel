import Image from "next/image";
import DataImage from "@/public/assets/data";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center justify-center md:justify-start relative z-60 w-full md:w-1/3">
      <Link href="/" className="flex items-center gap-4">
        <i className="ri-snowflake-line text-3xl rounded-xl text-blue-600 transition-colors duration-300"></i>

        <h1 className="md:text-2xl text-base font-bold text-[#0F253C] transition-colors duration-300">
          Freeze Logistics
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
