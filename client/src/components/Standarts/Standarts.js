import './standarts.css'
import reglament from "../../upload/РЕГЛАМЕНТ подключения к центр.системе ХВС от 13.05.2020г.pdf";
import zayavlenie_na_podklyuchenie from "../../upload/заявление на подключение.pdf";
import zayavlenie_na_teh_uslovie from "../../upload/заявление на тех.условие.pdf";
import perechen from "../../upload/перечень документом для подключения к водоснабжению.pdf";
import na_vodosnabzhenie from "../../upload/Договор на водоснабж - подвоз воды.pdf";
import na_komm_uslugi from "../../upload/Договор на комм.услуги физ.лицо.pdf";
import na_podklyuchenie from "../../upload/договор на подключение (тех.присоединение) к водопроводу.pdf";
import blank from "../../upload/Бланк ТехУсл по подключ к водопроводу.pdf";
import schema from "../../upload/Блок -схема.pdf";
import dogovor_na_vodosnabzhenie from "../../upload/Договор на водоснабжение юр.лицо.pdf";

export default function Standarts() {
    return (
        <div className='standarts'>

            <div className="contacts__left standarts__left">
                <div className="contacts__left__line"> </div>
                <div className="contacts__left__title">
                    Для раскрытия стандартов
                </div>
            </div>

            <ul className="consumers__list">
                <li><a href={reglament} download>Регламент подключения к центр.системе ХВС от 13.05.2020г</a></li>
                <li><a href={zayavlenie_na_podklyuchenie} download>Заявление на подключение</a></li>
                <li><a href={zayavlenie_na_teh_uslovie} download>Заявление на тех.условие</a></li>
                <li><a href={perechen} download>Перечень документов для подключения к водоснабжению</a></li>
                <li><a href={na_vodosnabzhenie} download>Договор на водоснабжение - подвоз воды</a></li>
                <li><a href={na_komm_uslugi} download>Договор на коммунальные услуги физ.лицо</a></li>
                <li><a href={na_podklyuchenie} download>Договор на подключение (тех.присоединение) к водопроводу</a>
                </li>
                <li><a href={blank} download>Бланк технических услуг по подключению к водопроводу</a></li>
                <li><a href={schema} download>Блок-схема последовательности действий при подключении</a></li>
                <li><a href={dogovor_na_vodosnabzhenie} download>Договор на водоснабжение юр.лицо</a></li>
            </ul>
        </div>
    )
}
