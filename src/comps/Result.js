import React from 'react';

function Result(props){
    let amount = props.amount;
    let result = props.result;
    return(
        <div className='p-2 mt-3 text-center'>
            <h4>The amount is: {amount} {props.fromCurrency}</h4>
            <h4>You will get: {result === 'NaN' ? 'Loading...' : result + ' ' + props.toCurrency}</h4>
        </div> 
    )
}

export default Result