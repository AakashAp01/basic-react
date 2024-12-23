import { useEffect, useState } from "react";
import InputBox from "./currencyComponent/InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]));
    } else {
      setConvertedAmount(0);
    }
  };
  
  return (
    <div
      className="w-full flex justify-center items-center min-h-screen bg-gradient-to-r
from-[#2dd4bf]
to-[#1f2937]"
    >
      <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg p-6 shadow-lg bg-slate-800">
        <h1 className="text-xl font-semibold text-center text-white mb-4">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-3">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrecny={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative w-full flex justify-center py-3">
            <button
              type="button"
              className=" bg-[#2dd4bf] text-white  rounded-full px-4 py-2 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrecny={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2dd4bf] text-white font-bold py-3 rounded-lg transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}
