import { useState, useEffect } from "react";
import CurrencyConverter from "./CurrencyConverter";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://currencyapi-net.p.rapidapi.com/rates",
  params: { output: "JSON", base: "USD" },
  headers: {
    "x-rapidapi-host": "currencyapi-net.p.rapidapi.com",
    "x-rapidapi-key": "5cf25132e5msh07ce895df09bd96p1fb02ajsn623ba5792950",
  },
};

const Currency = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.request(options);
      const data = await response.data;
      const firstCurrency = Object.keys(data.rates)[47];
      setCurrencyOptions([...Object.keys(data.rates)]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.rates[firstCurrency]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      const fetchData = async () => {
        const response = await axios.request(options);
        const data = await response.data;
        setExchangeRate(data.rates[toCurrency]);
      };
      fetchData();
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };
  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };
  return (
    <>
      <CurrencyConverter
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <CurrencyConverter
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />
    </>
  );
};

export default Currency;
