import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { useState } from 'react';
import { increament, decreament ,increamentByAmount} from './counterSlice';

function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (<>
        <h2>counter app</h2>
        <div>
            <button onClick={()=>dispatch(increament())}>+</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(decreament())}>-</button>
            <button onClick={()=>dispatch(increamentByAmount(10))}>increment by value</button>
        </div>
    </>
    )
}

export default Counter;