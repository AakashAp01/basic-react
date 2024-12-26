import { useCallback, useState, useEffect, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwrodRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}><?{}][";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  const copyPassword = useCallback(() => {
    passwrodRef.current?.select();
    passwrodRef.current.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div className="bg-slate-600 h-screen p-8 flex flex-col justify-center items-center text-red-500">
      <div className="bg-slate-900 rounded-lg p-5">
        <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">
          Password Generator
        </h1>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <input
              type="text"
              className="w-80 h-10 p-3 border border-gray-300 bg-slate-800 outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Generated Password"
              value={password}
              readOnly
              ref={passwrodRef}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                id="includeNumbers"
                defaultChecked={numberAllowed}
                className="h-5 w-5 rounded focus:ring-2 focus:ring-red-900"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="includeNumbers">Numbers</label>
            </div>

            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                id="includeSpecialChars"
                defaultChecked={charAllowed}
                className="h-5 w-5 rounded focus:ring-2 focus:ring-red-900"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="includeSpecialChars">Characters</label>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-lg">
            <input
              type="range"
              className="cursor-pointer"
              min={10}
              max={100}
              value={length}
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label htmlFor="">Length ({length})</label>
          </div>
        </div>
      </div>
    </div>
  );
}
