// src/components/CounterComponent.js
import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterComponent = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
            <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
            <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
        </div>
    );
};

export default CounterComponent;
