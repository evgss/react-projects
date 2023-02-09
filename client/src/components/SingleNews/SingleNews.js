import './singlenews.css'
import {Link} from "react-router-dom";

export default function SingleNews({oneNews}) {
    return (
        <div className='singlenews'>
            <div className="singlenews__date">
                {new Date(oneNews.createdAt).toLocaleDateString()}
            </div>
            <div className="singlenews__container">
                <div className="singlenews__container__title">
                    <Link to={`/news/${oneNews._id}`}>
                        {oneNews.title}
                    </Link>
                </div>
                <div className='singlenews__container__text'>
                {
                    oneNews.text && oneNews.text.map(news =>
                            <>
                                {news}
                                <br/>
                            </>
                    )
                }
                </div>
            </div>
        </div>
    )
}
