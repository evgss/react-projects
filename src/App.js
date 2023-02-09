import './App.css';
import data from './data.json';
import { useEffect, useMemo, useState } from "react";
import Timer from "./components/Timer/Timer";
import Questions from "./components/Questions/Questions";
import Start from "./components/Start/Start";

export default function App() {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("$ 0");
    const [username, setUsername] = useState(null);

    const moneyPyramid = useMemo(
        () =>
            [
                { id: 1, amount: "$ 100" },
                { id: 2, amount: "$ 200" },
                { id: 3, amount: "$ 300" },
                { id: 4, amount: "$ 500" },
                { id: 5, amount: "$ 1.000" },
                { id: 6, amount: "$ 2.000" },
                { id: 7, amount: "$ 4.000" },
                { id: 8, amount: "$ 8.000" },
                { id: 9, amount: "$ 16.000" },
                { id: 10, amount: "$ 32.000" },
                { id: 11, amount: "$ 64.000" },
                { id: 12, amount: "$ 125.000" },
                { id: 13, amount: "$ 250.000" },
                { id: 14, amount: "$ 500.000" },
                { id: 15, amount: "$ 1.000.000" },
            ].reverse(),
        []
    );

    useEffect(() => {
        questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
    }, [moneyPyramid, questionNumber]);

    return (
        <div className='container'>
            {
                username ?
                    <>
                        <div className="container-main">
                            {
                                stop ? <h1 className='end-text'>You earned: {earned} </h1> :
                                    <>
                                        <div className="top">
                                            <Timer setStop={setStop} questionNumber={questionNumber} />
                                        </div>
                                        <div className="bottom">
                                            <Questions
                                                data={data}
                                                setStop={setStop}
                                                questionNumber={questionNumber}
                                                setQuestionNumber={setQuestionNumber}
                                            />
                                        </div>
                                    </>
                            }
                        </div>
                        <div className="container-pyramid">
                            <ul className="moneyList">
                                <div style={{ textAlign: 'right' }}>{username}</div>
                                {
                                    moneyPyramid.map(u => (
                                        <li key={u.id}
                                            className={questionNumber === u.id ? 'moneyListItem active' : 'moneyListItem'}>
                                            <span className='moneyListItemNumber'>{u.id}</span>
                                            <span className='moneyListItemAmount'>{u.amount}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                    :
                    <Start setUsername={setUsername} />
            }
        </div>
    );
}
