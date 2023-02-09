import './services.css'
import {Link} from "react-router-dom";

export default function Services() {
    const PF = 'http://teploplus-uk.ru/images/'
    return (
        <div className='services'>
            <div style={{backgroundImage: `url(${PF+ 'houses.jpeg'} )`}} className="services__inner">
                <div className="services__inner__item">
                    <div className="services__inner__item__line"> </div>
                    <div className="services__inner__item__title">
                        <Link to='/consumers'>Физическим лицам</Link>
                    </div>
                </div>
                <div className="services__inner__item">
                    <div className="services__inner__item__line"> </div>
                    <div className="services__inner__item__title">
                        <Link  to='/meters'>Внести показания <br/>счетчиков</Link>
                    </div>
                    <div className="services__inner__item__text">
                        Передавайте показания счетчиков в пару кликов не выходя из дома
                    </div>
                </div>
                <div className="services__inner__item">
                    <div className="services__inner__item__line"> </div>
                    <div className="services__inner__item__title">
                        <Link to='/legal'>Юридическим лицам</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
