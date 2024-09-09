import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
    const [showCounter, setShowCounter] = useState(true);

    const countSelector = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div
            style={{
                width: '20rem',
                margin: '200px auto',
                padding: '1rem',
                border: '2px solid black',
                textAlign: 'center',
            }}
        >
            <h2>Counter</h2>

            {showCounter && (
                <>
                    <p style={{ fontSize: '2rem' }}>{countSelector}</p>
                    <div>
                        <button
                            style={{ fontSize: '1.2rem' }}
                            onClick={() => dispatch({ type: 'INCREMENTBY2' })}
                        >
                            IncrementBy2
                        </button>
                        <button
                            style={{ fontSize: '1.2rem' }}
                            onClick={() => dispatch({ type: 'DECREMENTBY2' })}
                        >
                            DecrementBy2
                        </button>
                    </div>
                </>
            )}
            <button
                style={{ fontSize: '1.2rem' }}
                onClick={() => setShowCounter(!showCounter)}
            >
                Toggle Counter
            </button>
        </div>
    );
}