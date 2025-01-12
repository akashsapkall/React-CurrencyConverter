import { useEffect, useState } from "react";

import useCurrencyInfo from "./components/useCurrencyInfo";
import InputBox from "./components/Inputbox";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const { data: currencyData } = useCurrencyInfo(from);

  const options = Object.keys(currencyData);

  function convert() {
    setConvertedAmount(currencyData[to] * amount);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
//   useEffect(() => {
//     convert();
//   }, [to, from, amount]);

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">

      <div className="w-full">
        <div className="w-fit mx-auto my-7 text-2xl font-semibold">
          <span>Currency Converter App</span>
        </div>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-400">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amt) => {
                  setAmount(amt);
                }}
                currencyList={options}
                selectCurrency={from}
                onCurrencyChange={(val) => {
                  setFrom(val);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                amountDisabled={true}
                currencyList={options}
                selectCurrency={to}
                onCurrencyChange={(val) => {
                  setTo(val);
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              {`Convert From ${from.toUpperCase()} To ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
