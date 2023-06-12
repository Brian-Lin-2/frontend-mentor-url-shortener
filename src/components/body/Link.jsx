import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Link({ link }) {
  return (
    <div className="mx-48 flex justify-between items-center bg-white py-4 px-8 text-lg -mt-12 rounded">
      <p className="mt-1">{link}</p>
      <div className="flex gap-6 items-center">
        <p className="text-cyan mt-1">Placeholder</p>
        <button className="bg-cyan text-sm py-2 px-6 rounded-md text-white">
          Copy
        </button>
      </div>
    </div>
  );
}
