import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]||{}));
    }, [currency]);
  return { data };
}
export default useCurrencyInfo;

// export const useCurrencyInfo = (currency) => {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     async function fetchApi() {
//       const response = await fetch(
//         `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//       );
//       const jsonData = await response.json();
//       setData(jsonData[currency] || {});
//     }
//     fetchApi();
//   }, [currency]);
// //   console.log(data);
//   return { data };
// };
