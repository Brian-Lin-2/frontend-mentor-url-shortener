import Link from "./Link";
import { useState } from "react";

export default function Shorten() {
  const [link, setLink] = useState("");
  const [history, setHistory] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setHistory([...history, link]);
  }

  return (
    <>
      <form
        className="bg-dark-violet bg-shorten-pattern-mob bg-right-top bg-no-repeat mx-8 py-6 px-2 rounded-lg relative bottom-20 lg:bg-shorten-pattern-desk lg:mx-48 lg:pt-12 lg:pb-6 lg:px-16 lg:bottom-18"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col items-center lg:flex-row lg:gap-6">
          <input
            className="outline-none w-11/12 rounded-md p-4 pb-3 text-sm outline-2 -outline-offset-1 outline-red lg:mb-0 lg:w-4/5 lg:text-lg lg:pl-8"
            type="text"
            placeholder="Shorten a link here..."
            onChange={(e) => setLink(e.target.value)}
          ></input>
          <p className="text-red mt-2 italic text-sm ml-16 w-full lg:hidden">
            Please add a link
          </p>
          <button className="text-white bg-cyan mt-4 p-3 w-11/12 rounded-md lg:w-1/5 lg:text-lg lg:py-3.5 lg:mt-0 hover:bg-light-cyan">
            Shorten it!
          </button>
        </div>
        <p className="hidden text-red mt-2 italic text-sm ml-8 lg:block">
          Please add a link
        </p>
      </form>

      <div className="flex flex-col gap-16">
        {history.map((link) => {
          return <Link key={crypto.randomUUID()} link={link} />;
        })}
      </div>
    </>
  );
}
