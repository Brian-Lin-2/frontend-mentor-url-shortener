export default function Header() {
  return (
    <div className="p-4 mb-20">
      <div className="flex justify-between mb-12">
        <img src="./images/logo.svg" alt="shortly" />
        <img className="w-8" src="./images/icon-hamburger.svg" alt="" />
      </div>

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
