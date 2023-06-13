import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:p-10">
      <div className="flex justify-between mb-12 lg:justify-start lg:items-center lg:ml-32 lg:mb-0 lg:gap-10">
        <img src="./images/logo.svg" alt="shortly" />
        <img
          className="w-8 hover:cursor-pointer lg:hidden"
          src="./images/icon-hamburger.svg"
          alt=""
        />
        <MobileMenu />

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
      <div className="flex gap-8 mr-32">
        <button className="hidden lg:block text-grayish-violet font-bold text-sm hover:text-black">
          Login
        </button>
        <button className="hidden lg:block bg-cyan py-2 px-6 rounded-full text-white text-sm hover:bg-light-cyan">
          Sign Up
        </button>
      </div>
    </div>
  );
}
