import { useState } from 'react'

import useCurrencyInfo from './components/useCurrencyInfo';
import InputBox from './components/Inputbox';

function App() {
    const [amount,setAmount]=useState(0);
    const [convertedAmount,setConvertedAmount]=useState(0);
    const [from,setFrom]=useState("usd");
    const [to,setTo]=useState("usd");

    const data=useCurrencyInfo(from);
    const options=Object.keys(data);
    function convert(){
      setConvertedAmount(data[to]*amount);
    }
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      >
          <div className="w-full">
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
                              currencyList={options}
                              selectCurrency={from}
                              onCurrencyChange={(currency)=>{setFrom(currency)}}
                              onAmountChange={(amount)=>setAmount(amount)}    
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyList={options}
                              selectCurrency={to}
                              onCurrencyChange={(currency)=>{setTo(currency)}}
                              amountDisabled 
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          {`Convert From ${from} To ${to}`}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App