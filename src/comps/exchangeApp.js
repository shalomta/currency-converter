import React, { useEffect, useState } from 'react';
import Input from './input';
import Result from './Result';
import axios from 'axios';

function ExchangeApp(props) {
    let [ar, setAr] = useState([]);
    let [amount, setAmount] = useState(1);
    let [result, setResult] = useState(1);
    let [fromCurrency, setFromCurrency] = useState('USD');
    let [toCurrency, setToCurrency] = useState('USD');

    useEffect(() => {
        doApi();
    }, []);

    useEffect(() => {
        calculateResult();
    }, [amount, fromCurrency, toCurrency, ar]);

    const doApi = async () => {
        try{
            let url = 'https://freecurrencyapi.net/api/v2/latest?apikey=' + `${process.env.REACT_APP_API_KEY}`;
            let resp = await axios.get(url);
            setAr({"USD": 1, ...resp.data.data});
        }
        catch(err){
            console.log('api error');
        }
    }

    // Calculating the result for the chosen currencies
    const calculateResult = () => {
        // console.log(ar);
        // console.log(amount * (ar['USD' + toCurrency] / ar['USD' + fromCurrency]));
        setResult((amount * (ar['USD' + toCurrency] / ar['USD' + fromCurrency])).toFixed(2));
        setResult((amount * (ar[toCurrency] / ar[fromCurrency])).toFixed(2));
    }

    return (
        <div className='container col-md-6'>
            <h1 className='text-center p-3'>Exchange calculator</h1>
            <Input setAmount={setAmount} setResult={setResult} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency} calculateResult={calculateResult} />
            <Result amount={amount} result={result} toCurrency={toCurrency} fromCurrency={fromCurrency} />
        </div>
    )
}

export default ExchangeApp