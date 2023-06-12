import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Link({ link }) {
  const [copied, setCopied] = useState(false);

  let buttonStyle = "bg-cyan text-sm py-2 px-6 rounded-md text-white";

  if (copied) {
    buttonStyle = "bg-black text-sm py-2 px-4 rounded-md text-white";
  }

  return (
    <div className="mx-48 flex justify-between items-center bg-white py-4 px-8 text-lg -mt-12 rounded">
      <p className="mt-1">{link}</p>
      <div className="flex gap-6 items-center">
        <p className="text-cyan mt-1">Placeholder</p>
        <button className={buttonStyle} onClick={() => setCopied(true)}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
