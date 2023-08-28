export default function Link({ link, short, copied, history, setHistory }) {
  let buttonStyle =
    "bg-cyan text-sm rounded-md py-2.5 text-white lg:py-2 lg:px-6 lg:text-sm";

  if (copied) {
    buttonStyle =
      "bg-black text-sm rounded-md py-2.5 text-white lg:py-2 lg:px-4 lg:text-sm";
  }

  if (link.length > 45) {
    link = link.substring(0, 44) + "...";
  }

  return (
    <div className="flex flex-col mx-8 bg-white -mt-12 rounded lg:flex-row lg:text-lg lg:py-4 lg:px-8 lg:justify-between lg:items-center lg:mx-48">
      <p className="border-b border-gray px-4 py-3 lg:border-none lg:p-0 lg:mt-1">
        {link}
      </p>
      <div className="flex flex-col px-4 py-3 gap-2 lg:flex-row lg:p-0 lg:gap-6 lg:items-center">
        <p className="text-cyan lg:mt-1">{short}</p>
        <button
          className={buttonStyle}
          onClick={() =>
            setHistory(
              history.map((item) => {
                if (item.short === short) {
                  // This method copies the short link.
                  navigator.clipboard.writeText(short);
                  return { ...item, copied: true };
                } else {
                  return { ...item };
                }
              })
            )
          }
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
