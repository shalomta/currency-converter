import React, { useRef } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";


function Input(props) {
    let toSelectRef = useRef();
    let fromSelectRef = useRef();
    let amountRef = useRef();

    const onAmountChange = () => {
        if(amountRef.current.value < 0){
            amountRef.current.value = 0;
        }
        props.setAmount(amountRef.current.value);
    }

    const onFromChange = () => {
        props.setFromCurrency( fromSelectRef.current.value);
    }

    const onToChange = () => {
        props.setToCurrency( toSelectRef.current.value);
    }

    const reverseFromTo = () => {
        let toValue = toSelectRef.current.value;
        toSelectRef.current.value = fromSelectRef.current.value;
        fromSelectRef.current.value = toValue;
        onFromChange();
        onToChange();
    }

    return (
        <div className='shadow p-2 border input'>
            <label>Amount:</label>
            <input ref={amountRef} onChange={onAmountChange} type='number' min={0} className='form-control' defaultValue='1'></input>
            <br />
            <br />
            <label>from:</label>
            <select id='from_input' ref={fromSelectRef} onChange={onFromChange} className='form-control'>
                <option value='DEFAULT' disabled>Choose a currency ...</option>
                <option value='USD'>usd</option>
                <option value='ILS'>ils</option>
                <option value='EUR'>eur</option>
                <option value='BTC'>btc</option>
                <option value='THB'>thb</option>
            </select>
            <br />
            <div className='text-center'>
                <i onClick={reverseFromTo} className='bi bi-arrow-down-up'></i>
            </div>
            {/* <br /> */}
            <label>to:</label>
            <select id='to_input' ref={toSelectRef} onChange={onToChange} className='form-control'>
                <option value='DEFAULT' disabled>Choose a currency ...</option>
                <option value='USD'>usd</option>
                <option value='ILS'>ils</option>
                <option value='EUR'>eur</option>
                <option value='BTC'>btc</option>
                <option value='THB'>thb</option>
            </select>
        </div>
    )
}

export default Input