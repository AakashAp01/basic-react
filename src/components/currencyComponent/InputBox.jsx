import React, { useId } from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrecny = "inr",
  amountDisable,
  currencyDisable,
  className = "",
}) {
  const amoundInputId = useId();

  return (
    <div
      className={`flex justify-between items-start space-x-3 p-3 bg-slate-700 rounded-lg ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amoundInputId}
          className="block text-sm text-white mb-1"
        >
          {label}
        </label>
        <input
          id={amoundInputId}
          type="number"
          className="w-full bg-transparent border text-white  rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2">
        <label
          htmlFor={`${label}-currency`}
          className="block text-sm text-white mb-1"
        >
          Currency
        </label>
        <select
          id={`${label}-currency`}
          className="w-full bg-transparent border text-white  rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          value={selectCurrecny}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-black">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
