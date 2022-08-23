import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";
import Footer from "./Footer";

// const BASE_URL= "https://api.exchangeratesapi.io/latest"

const Convertor = () => {
  const [currency, setCurrency] = useState();
  const [currency1, setCurrency1] = useState();
  const [amount, setAmount] = useState();
  const [result , setResult] = useState(0);



  const submitHandle =(e)=>{
e.preventDefault()
setResult(result);
  }

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "1KOi2kUjmgM5sTGy01heez4XqbiP5orO");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${currency1}&from=${currency}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setResult(result.result) )
      .catch((error) => console.log("error", error));
  }, [currency , currency1 , amount]);

  return (
    <>
      <div className="convert__body">
        <h1>Currency Convertor</h1>
        <input type="number" className="input" placeholder="Enter Amount" onChange={(e)=>{const amount = e.target.value ; setAmount(amount)}} />
       <input type="text" name="input" placeholder="EUR , GBP , JPY " onChange={(e)=>{const currency = e.target.value ; setCurrency(currency)}}/>
        <div className="equals">= {result}</div>
           
        <input type="text" name="input" placeholder="EUR , GBP , JPY " onChange={(e)=>{const currency1 = e.target.value ; setCurrency1(currency1)}} />
        <button onClick={submitHandle}></button>
      </div>
      <Footer />
    </>
  );
};

export default Convertor;
