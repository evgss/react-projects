import './news.css'
import SingleNews from "../SingleNews/SingleNews";
import {useEffect, useState} from "react";
import axios from "axios";

export default function News() {
    const axiosInstance = axios.create({
        baseURL: "http://teploplus-uk.ru/api/"
    })
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const res = await axiosInstance.get('news/')
            setNews(res.data)
        }
        fetchNews()
    }, [])

    return (
        <div className='news'>
            <div className="news__inner">
                <div className="news__inner__line">
                </div>
                <div className="news__inner__title">
                    Новости
                </div>
                {
                    news.length > 0 ? news.map(oneNews =>
                        <SingleNews key={oneNews._id} oneNews={oneNews}/>)
                        :
                        <h2>Пока новостей нет</h2>
                }
            </div>
        </div>
    )
}
