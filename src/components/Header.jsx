import Navbar from "./header/Navbar";

export default function Header() {
  return (
    <div className="p-4 pb-20 mb-20">
      <Navbar />

      <div className="flex flex-col-reverse lg:items-center lg:flex-row lg:ml-40 lg:mt-12">
        <div className="mt-8 flex flex-col items-center text-center lg:text-start lg:mx-10 lg:items-start lg:w-1/2">
          <h1 className="text-4xl font-bold lg:text-7xl lg:leading-very-tight">
            More than just shorter links
          </h1>
          <p className="text-grayish-violet mx-6 mt-3 mb-6 lg:text-xl lg:ml-0 lg:mr-12 lg:mt-1 lg:mb-8 lg:leading-normal">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="text-lg bg-cyan text-white py-2 px-10 rounded-full lg:py-3">
            Get Started
          </button>
        </div>

        <img
          className="lg:w-1/2"
          src="./images/illustration-working.svg"
          alt="hero"
        />
      </div>
    </div>
  );
}
