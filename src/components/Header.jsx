import Navbar from "./header/Navbar";

export default function Header() {
  return (
    <div className="p-4 pb-20 mb-20">
      <Navbar />

      <img src="./images/illustration-working.svg" alt="hero" />
      <div className="mt-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">More than just shorter links</h1>
        <p className="text-grayish-violet mx-6 mt-3 mb-6">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-lg bg-cyan text-white py-2 px-10 rounded-3xl">
          Get Started
        </button>
      </div>
    </div>
  );
}
