import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count === 20) return;
    setCount(count + 1);
  };

  const remove = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-8">Counter: {count}</h1>
      <div className="flex gap-4">
        <button
          onClick={add}
          style={{
            backgroundColor: getRandomColor(),
          }}
          className="px-6 py-3 text-l font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
        >
          Add +
        </button>
        <button
          onClick={remove}
          className="px-6 py-3 text-l font-semibold bg-green-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
        >
          Remove -
        </button>
      </div>
    </div>
  );
}

export default Counter;
