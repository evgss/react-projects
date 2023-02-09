import './addnews.css'
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Context} from "../../redux/Context";
import {AddNewsFailure, AddNewsStart, AddNewsSuccess} from "../../redux/Actions";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddNews() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const {token, dispatch, newsAdded, error, isFetching, checkToken} = useContext(Context)

    const axiosInstance = axios.create({
        baseURL: "http://teploplus-uk.ru/api/"
    })

    useEffect(() => {
        const notify = () => {
            if (newsAdded) {
                toast.success('Новость успешно отправлена!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                });
            } else if (error) {
                toast.error('Ошибка!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    className: 'toast'
                });
            }
        }
        notify()
    }, [newsAdded, error])

    const newNewsHandler = async (e) => {
        e.preventDefault()
        checkToken()
        dispatch(AddNewsStart())
        try {
            await axiosInstance.post('news/', {title, text: text.split('\n').filter(t => t !== '')}, {
                headers: {
                    "authorization": 'Bearer ' + token
                }
            })
            dispatch(AddNewsSuccess())
        } catch (err) {
            dispatch(AddNewsFailure())
        }
        setTitle('')
        setText('')
    }
    return (
        <div className='addnews'>
            <form className="addnews__form" onSubmit={newNewsHandler}>
                <label>Заголовок:</label>
                <input className='addnews__form__inputTitle'
                       value={title} onChange={(e) => setTitle(e.target.value)}
                       type="text"
                />
                <label>Содержание:</label>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {
                    isFetching ?
                        <button className="addnews__form__btn" disabled={true}
                                style={{cursor: 'not-allowed'}}>Отправить</button>
                        :
                        <button className="addnews__form__btn">Отправить</button>
                }
            </form>
        </div>
    )
}
