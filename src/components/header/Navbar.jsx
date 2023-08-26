import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:p-10">
      <div className="flex justify-between mb-12 lg:justify-start lg:items-center lg:ml-32 lg:mb-0 lg:gap-10">
        <img src="./images/logo.svg" alt="shortly" />

        <a>
          <img
            className="w-8 hover:cursor-pointer lg:hidden"
            src="./images/icon-hamburger.svg"
            alt=""
            onClick={() => setOpenMenu(true)}
          />
        </a>

        {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}

        <a className="hidden lg:block text-grayish-violet font-bold text-sm hover:text-black hover:cursor-pointer">
          Features
        </a>
        <a className="hidden lg:block text-grayish-violet font-bold text-sm hover:text-black hover:cursor-pointer">
          Pricing
        </a>
        <a className="hidden lg:block text-grayish-violet font-bold text-sm hover:text-black hover:cursor-pointer">
          Resources
        </a>
      </div>
      <div className="flex items-center gap-8 mr-32">
        <Link
          to="/login"
          className="hidden lg:block text-grayish-violet font-bold text-sm hover:text-black"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="hidden lg:block bg-cyan py-2 px-6 rounded-full text-white text-sm hover:bg-light-cyan"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
