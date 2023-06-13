import Link from "./Link";
import { useState, useEffect } from "react";

export default function Shorten() {
  // Import history, if it exists.
  const getStorage = () => {
    return JSON.parse(sessionStorage.getItem("history")) || [];
  };

  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [history, setHistory] = useState(getStorage());
  const [error, setError] = useState(false);

  let errorTextMob =
    "hidden text-red mt-2 italic text-sm ml-16 w-full lg:hidden";
  let errorTextDesk =
    "hidden text-red mt-2 italic text-sm ml-8 lg:block lg:invisible";
  let inputStyle =
    "outline-none w-11/12 rounded-md p-4 pb-3 text-sm lg:mb-0 lg:w-4/5 lg:text-lg lg:pl-8";

  if (error) {
    errorTextMob = "text-red mt-2 italic text-sm ml-16 w-full lg:hidden";
    errorTextDesk = "hidden text-red mt-2 italic text-sm ml-8 lg:block";
    inputStyle =
      "w-11/12 rounded-md p-4 pb-3 text-sm outline outline-2 -outline-offset-1 outline-red lg:mb-0 lg:w-4/5 lg:text-lg lg:pl-8";
  }

  let shortenStyle = "flex flex-col gap-16";

  if (history.length !== 0) {
    shortenStyle = "flex flex-col gap-16 mb-20";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link === "") {
      setError(true);
    } else {
      setError(false);
      convertLink(link);
    }
  };

  const convertLink = async (link) => {
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
    const short = await data.json();

    // This will trigger the useEffect() hook.
    setShortLink(short.result.full_short_link);
  };

  useEffect(() => {
    if (shortLink && history.length >= 3) {
      setHistory([
        ...history.slice(0, 2),
        { link: link, short: shortLink, copied: false },
      ]);
    } else if (shortLink) {
      setHistory([...history, { link: link, short: shortLink, copied: false }]);
    }
  }, [shortLink]);

  // Saves links in local memory for future use.
  useEffect(() => {
    sessionStorage.setItem("history", JSON.stringify(history));
  });

  return (
    <>
      <form
        className="bg-dark-violet bg-shorten-pattern-mob bg-right-top bg-no-repeat mx-8 py-6 px-2 rounded-lg relative bottom-20 lg:bg-shorten-pattern-desk lg:mx-48 lg:pt-12 lg:pb-6 lg:px-16 lg:bottom-18"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col items-center lg:flex-row lg:gap-6">
          <input
            className={inputStyle}
            type="text"
            placeholder="Shorten a link here..."
            onChange={(e) => setLink(e.target.value)}
          ></input>
          <p className={errorTextMob}>Please add a link</p>
          <button className="text-white bg-cyan mt-4 p-3 w-11/12 rounded-md lg:w-1/5 lg:text-lg lg:py-3.5 lg:mt-0 hover:bg-light-cyan">
            Shorten it!
          </button>
        </div>
        <p className={errorTextDesk}>Please add a link</p>
      </form>

      <div className={shortenStyle}>
        {/* Creates a shallow copy and prints the array reversed */}
        {history
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <Link
                key={crypto.randomUUID()}
                link={item.link}
                short={item.short}
                copied={item.copied}
                history={history}
                setHistory={setHistory}
              />
            );
          })}
      </div>
    </>
  );
}
