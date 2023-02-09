import './contacts.css'

export default function Contacts() {
    return (
        <div className='contacts'>
            <div className="contacts__left">
                <div className="contacts__left__line"> </div>
                <div className="contacts__left__title">
                    Контакты
                </div>
            </div>
            <div className="contacts__right">
                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Адрес:
                    </div>
                    <div className="contacts__right__item__info">
                        617500, Пермский край, с. Орда, ул. Трактовая, д.22
                    </div>
                </div>
                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Директор, юрист:
                    </div>
                    <div className="contacts__right__item__info">
                        8 (34258) 2-03-40
                    </div>
                </div>
                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Гл. инженер:
                    </div>
                    <div className="contacts__right__item__info">
                        8 (34258) 2-05-65
                    </div>
                </div>

                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Бухгалтер:
                    </div>
                    <div className="contacts__right__item__info">
                        8 (34258) 2-05-34
                    </div>
                </div>

                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Экономист:
                    </div>
                    <div className="contacts__right__item__info">
                        8 (34258) 2-11-31
                    </div>
                </div>

                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Бухгалтер по расчетам с населением:
                    </div>
                    <div className="contacts__right__item__info">
                        8 (34258) 2-02-42
                    </div>
                </div>

                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Email:
                    </div>
                    <div className="contacts__right__item__info">
                        mp_teplo@mail.ru
                    </div>
                </div>
                <div className="contacts__right__item">
                    <div className="contacts__right__item__name">
                        Часы работы:
                    </div>
                    <div className="contacts__right__item__info">
                        Понедельник – пятница с 8:00 до 17:00 <br/>
                        Обед с 12:00 до 13:00
                    </div>
                </div>
            </div>
        </div>
    )
}
