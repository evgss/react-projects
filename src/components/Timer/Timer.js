import './timer.css';
import { useEffect, useState } from "react";
import wrong from '../../assets/wrong.mp3';
import useSound from "use-sound";

export default function Timer({ setStop, questionNumber }) {
    const [time, setTime] = useState(30);
    const [wrongAnswer] = useSound(wrong);
    useEffect(() => {
        if (time === 0) {
            wrongAnswer();
            return setStop(true);
        }
        const interval = setInterval(() => {
            time > 0 && setTime(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [setStop, time]);

    useEffect(() => {
        setTime(30);
    }, [questionNumber]);
    return (
        <div className='timer'>
            {time}
        </div>
    );
}
