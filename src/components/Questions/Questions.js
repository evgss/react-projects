import './questions.css';
import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from '../../assets/play.mp3';
import correct from '../../assets/correct.mp3';
import wrong from '../../assets/wrong.mp3';

export default function Questions({ data, setQuestionNumber, setStop, questionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (p) => {
        setSelectedAnswer(p);
        setClassName('answer active');
        delay(2000, () => setClassName(p.correct ? 'answer correct' : 'answer wrong'));
        delay(5000, () => {
            if (p.correct) {
                correctAnswer();
                delay(1000, () => {
                    setQuestionNumber(prev => prev + 1);
                    setSelectedAnswer(null);
                });
            } else {
                wrongAnswer();
                delay(1000, () => {
                    setStop(true);
                    setSelectedAnswer(null);
                });
            }
        });

    };

    return (
        <div className='questions'>
            <div className='question'>{question?.question}</div>
            <div className='answers'>
                {
                    question?.answers.map(p => <div className={selectedAnswer === p ? className : 'answer'}
                        onClick={() => handleClick(p)}>{p.text}</div>)
                }
            </div>
        </div>
    );
}
