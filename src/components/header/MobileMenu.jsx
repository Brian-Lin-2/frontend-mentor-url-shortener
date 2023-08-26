import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MobileMenu({ setOpenMenu }) {
  return (
    <div className="fixed inset-0 bg-v-dark-blue text-white flex flex-col items-center gap-8 text-xl z-20">
      <a>
        <img
          className="absolute right-0 m-6 w-6 hover:cursor-pointer"
          src="./images/icon-close.svg"
          alt=""
          onClick={() => setOpenMenu(false)}
        />
      </a>

      <div className="mt-32 border-b flex flex-col items-center gap-8 pb-8 px-28">
        <a className="hover:text-cyan hover:cursor-pointer">Features</a>
        <a className="hover:text-cyan hover:cursor-pointer">Pricing</a>
        <a className="hover:text-cyan hover:cursor-pointer">Resources</a>
      </div>

      <Link to="/login" className="hover:text-cyan hover:cursor-pointer">
        Login
      </Link>
      <Link
        to="/register"
        className="py-2 px-28 bg-cyan rounded-full hover:bg-light-cyan"
      >
        Sign Up
      </Link>
    </div>
  );
}
