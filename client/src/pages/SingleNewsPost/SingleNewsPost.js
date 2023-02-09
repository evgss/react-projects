import './singlenewspost.css'
import {useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import {Context} from "../../redux/Context";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import {
    DeleteNewsFailure,
    DeleteNewsStart,
    DeleteNewsSuccess, UpdateNewsFailure,
    UpdateNewsStart,
    UpdateNewsSuccess
} from "../../redux/Actions";

export default function SingleNewsPost() {
    const axiosInstance = axios.create({
        baseURL: "http://teploplus-uk.ru/api/"
    })
    const [oneNews, setOneNews] = useState({})
    const [updateMode, setUpdateMode] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState([])
    const location = useLocation().pathname.split('/')[2]
    const {token, dispatch} = useContext(Context)
    const [confirmWindow, setConfirmWindow] = useState(false)


    useEffect(() => {
        setTitle(oneNews.title)
        setText(oneNews.text)
    }, [oneNews])

    useEffect(() => {
        const fetchOneNews = async () => {
            const res = await axiosInstance.get('/news/' + location)
            setOneNews(res.data)
        }
        fetchOneNews()
    }, [location])

    const deleteHandler = async () => {
        dispatch(DeleteNewsStart())
        try {
            await axiosInstance.delete('/news/' + oneNews._id, {
                headers: {
                    "authorization": 'Bearer ' + token
                }
            })
            dispatch(DeleteNewsSuccess())
            window.location.replace('/news')
        } catch (err) {
            dispatch(DeleteNewsFailure())
        }
    }
    const updateHandler = async (e) => {
        e.preventDefault()
        dispatch(UpdateNewsStart())
        try {
            await axiosInstance.put('/news/' + oneNews._id, {title, text}, {
                headers: {
                    "authorization": 'Bearer ' + token
                }
            })
            dispatch(UpdateNewsSuccess())
            window.location.replace('/news')
        } catch (err) {
            dispatch(UpdateNewsFailure())
        }
    }
    return (
        <>
            <Topbar/>
            <div className='singlenewspost'>
                {token && <span className='admin__icons'>
                    <span>Редактирование новости: </span>
                  <i className="fa-solid fa-pen-to-square fa-2x"
                     onClick={() => setUpdateMode(!updateMode)}/>
                  <i className="fa-solid fa-trash fa-2x"
                     onClick={() => setConfirmWindow(!confirmWindow)}
                  />
                 </span>}
                {updateMode ? <form className='singlenewspost__form' onSubmit={updateHandler}>
                    <textarea className='singlenewspost__form__title'
                              autoFocus
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                    />
                        <textarea className='singlenewspost__form__text'
                                  value={text.join('\n\n')}
                                  onChange={(e) => setText(e.target.value.split('\n\n'))}
                        />
                        <button className='singlenewspost__form__btn' type='submit'>Изменить</button>
                    </form> :
                    <>
                        <div className="singlenewspost__title">
                            {oneNews.title}
                        </div>
                        <div className="singlenewspost__date">
                            <span>{new Date(oneNews.createdAt).toLocaleDateString()}</span>
                        </div>
                        {
                            oneNews.text && oneNews.text.map(news =>
                                <>
                                    <div style={{overflowWrap: 'break-word'}} className="singlenewspost__text"
                                         key={oneNews._id}>
                                        {news}
                                    </div>
                                    <br/>
                                </>
                            )
                        }
                    </>
                }
            </div>
            <ModalWindow active={confirmWindow} setActive={setConfirmWindow} deleteHandler={deleteHandler}/>
            <Footer/>
        </>
    )
}

