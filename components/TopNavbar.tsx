import Image from "next/image";
import DataImage from "@/public/assets/data";

function Logo() {
  return (
    <div className="flex items-center gap-4 relative z-60 w-full md:w-1/3 md:justify-start justify-center">
      <i
        className={`ri-snowflake-line text-3xl rounded-xl transition-colors duration-300 text-blue-600
       `}
      ></i>

      <h1
        className={`md:text-2xl text-base font-bold transition-colors duration-300
        `}
      >
        Freeze Logistics
      </h1>
    </div>
  );
}

export default Logo;
