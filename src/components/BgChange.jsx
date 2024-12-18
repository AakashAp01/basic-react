import React, { useState } from "react";

export default function BgChange() {
  const [color, setColor] = useState("olive");
  const colors = ["olive", "green", "blue", "red", "pink", "black"];

  return (
    <div
      className="w-full h-80 duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center pt-10">
        <div className="flex flex-warp gap-2 justify-center rounded-full p-2 bg-white">
          {colors.map((element, index) => (
            <button
              style={{ backgroundColor: element }}
              key={index}
              onClick={() => setColor(element)}
              className={`px-7 py-2 rounded-full font-semibold text-white`}
            >
              <span className={`capitalize`} >{element}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
