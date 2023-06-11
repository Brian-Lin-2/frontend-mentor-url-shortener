export default function Shorten() {
  return (
    <form className="flex flex-col items-center bg-dark-violet bg-shorten-pattern-mob bg-right-top bg-no-repeat mx-8 py-6 px-2 rounded-lg relative bottom-20 lg:bg-shorten-pattern-desk lg:mx-56 lg:flex-row lg:py-12 lg:px-14 lg:gap-6">
      <input
        className="outline-none w-11/12 mb-4 rounded-md p-4 pb-3 text-sm lg:mb-0 lg:w-5/6"
        type="text"
        placeholder="Shorten a link here..."
      ></input>
      <button className="text-white bg-cyan p-3 w-11/12 rounded-md lg:w-1/6">
        Shorten it!
      </button>
    </form>
  );
}
