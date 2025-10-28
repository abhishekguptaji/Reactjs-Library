import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import useCurrInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convAmount, setConvAmount] = useState(0);

  const CurrencyInfo = useCurrInfo(from);
  const option = Object.keys(CurrencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvAmount(amount);
    setAmount(convAmount);
  };

  const convert = () => {
    setConvAmount(amount * CurrencyInfo[to]);
  };

  return (
   <div
  className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
>
      <div className="w-full max-w-md mx-auto rounded-2xl shadow-2xl p-6 border border-white/20 bg-white/20 backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-white text-center mb-5 tracking-wide drop-shadow-md">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-4"
        >
          {/* From input */}
          <div>
            <Input
              label="From"
              amount={amount}
              currencyOptions={option}
              onCurrencyChang={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap button */}
          <div className="relative flex justify-center">
            <button
              type="button"
              className="absolute -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full shadow-md font-semibold text-sm hover:scale-105 hover:shadow-lg transition-transform duration-200"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To input */}
          <div>
            <Input
              label="To"
              amount={convAmount}
              currencyOptions={option}
              onCurrencyChang={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg py-3 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
