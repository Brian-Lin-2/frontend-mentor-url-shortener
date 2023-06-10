export default function Shorten() {
  return (
    <form className="flex flex-col items-center bg-dark-violet mx-8 py-6 px-2 rounded-lg relative bottom-20">
      <input
        className="outline-none w-11/12 mb-4 rounded-md p-4 pb-3 text-sm"
        type="text"
        placeholder="Shorten a link here..."
      ></input>
      <button className="text-white bg-cyan py-2 w-11/12 rounded-md">
        Shorten it!
      </button>
    </form>
  );
}
