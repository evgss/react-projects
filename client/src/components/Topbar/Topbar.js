import './topbar.css'
import {Link} from "react-router-dom";
import TopbarMobile from "./TopbarMobile/TopbarMobile";

export default function Topbar() {
    const PF = 'http://teploplus-uk.ru/images/'
    return (
        <div className='topbar'>
            <div className='topbar__inner'>
                <Link className='logo' style={{flex: '1'}} to='/'><img className='topbar__inner__left__logo'
                                                                       src={PF + 'uk.jpg'} alt="Теплоплюс"/></Link>
                <div className='topbar__inner__left'>
                    <ul className='topbar__inner__left__list'>
                        <li className='topbar__inner__left__list__item'>
                            <Link to='/'>О нас</Link>
                        </li>
                        <li className='topbar__inner__left__list__item'>
                            <Link to='/news'>Новости</Link>
                        </li>
                        <li className='topbar__inner__left__list__item'>
                            <Link to='/consumers'>Физическим лицам</Link>
                        </li>
                        <li className='topbar__inner__left__list__item'>
                            <Link to='/legal'>Юридическим лицам</Link>
                        </li>
                        <li className='topbar__inner__left__list__item'>
                            <Link to='/meters'>Прием показаний</Link>
                        </li>
                        <li className='topbar__inner__left__list__item'>
                            <Link to='/contacts'>Контакты</Link>
                        </li>
                        <li className='topbar__inner__left__list__item'>
                            <Link to='/standarts'>Для раскрытия стандартов</Link>
                        </li>
                    </ul>
                </div>

                <div className="topbar__inner__right">
                    <div className='topbar__inner__right__phone'>
                        Тел. 8 (34258) 2-03-40
                    </div>
                </div>
            </div>
            <div className='topbar__inner__mobile'>
                <TopbarMobile/>
            </div>
        </div>

    )
}
