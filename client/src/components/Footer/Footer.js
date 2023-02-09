import './footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
    const PF = 'http://teploplus-uk.ru/images/'
    return (
        <div className='footer'>
            <Link className='footer__inner__logo' to='/'><img src={PF + 'uk.jpg'} alt="Теплоплюс"/></Link>
            <div className="footer__inner">
                <ul className="footer__inner__links">
                    {/*<li><Link className="footer__inner__links__item" to='/'>О нас</Link></li>*/}
                    <li><Link className="footer__inner__links__item" to='/news'>Новости</Link></li>
                    <li><Link className="footer__inner__links__item" to='/consumers'>Физическим лицам</Link></li>
                    <li><Link className="footer__inner__links__item" to='/legal'>Юридическим лицам</Link></li>
                    <li><Link className="footer__inner__links__item" to='/meters'>Прием показаний</Link></li>
                    <li><Link className="footer__inner__links__item" to='/contacts'>Контакты</Link></li>
                    <li><Link className="footer__inner__links__item" to='/standarts'>Для раскрытия стандартов</Link>
                    </li>
                </ul>
                <div className="footer__inner__phone">
                    <div className="footer__inner__phone__phone">
                        8 (34258) 2-03-40
                    </div>
                    <div className="footer__inner__phone__text">
                        Круглосуточный телефон <br/> диспетчера
                    </div>
                </div>
                <div className="footer__inner__email">
                    <div className="footer__inner__email__email">
                        mp_teplo@mail.ru
                    </div>
                    <div className="footer__inner__email__text">
                        Электронная почта
                    </div>
                </div>
            </div>
        </div>
    )
}
