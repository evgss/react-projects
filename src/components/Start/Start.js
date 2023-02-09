import './start.css';
import { useState } from "react";

export default function Start({ setUsername }) {
    const [value, setValue] = useState(null);
    const handleSubmit = () => {
        value && setUsername(value);
    };
    return (
        <div className='start'>
            <input className='start-input' onChange={(e) => setValue(e.target.value)} type="text"
                placeholder='Enter your name' />
            <button className='start-btn' disabled={!value} onClick={handleSubmit}>Start</button>
        </div>
    );
}
