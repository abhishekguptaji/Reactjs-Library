import { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-md border border-white/20 backdrop-blur-md ${className}`}
    >
      {/* Left: Amount Input */}
      <div className="w-full sm:w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-700 text-sm font-semibold mb-2 block tracking-wide"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 font-medium outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-400 transition disabled:opacity-60 placeholder:text-gray-400"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Right: Currency Selector */}
      <div className="w-full sm:w-1/2 text-center sm:text-right">
        <p className="text-gray-700 text-sm font-semibold mb-2">Currency</p>
        <select
          className="w-full sm:w-auto bg-white border border-gray-200 rounded-lg px-3 py-2 cursor-pointer text-gray-800 font-medium focus:ring-4 focus:ring-pink-300 focus:border-pink-400 outline-none transition disabled:opacity-60"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
