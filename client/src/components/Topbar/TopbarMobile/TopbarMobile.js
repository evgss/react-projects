import './topbarmobile.css'
import {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion'

export default function TopbarMobile() {
    const [open, setOpen] = useState(false)
    const animateFrom = {opacity: '0', y: -150}
    const animateTo = {opacity: '1', y: 0}

    return (
        <div className='topbarmobile'>
            {
                open ?
                    <i className="fa-solid fa-xmark fa-2x topbarmobile__icon" onClick={() => setOpen(!open)}/>
                    :
                    <i className="fa-solid fa-bars fa-2x topbarmobile__icon" onClick={() => setOpen(!open)}/>
            }

            {open &&
                <ul className='topbarmobile__list'>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}}
                               className='topbarmobile__item'>
                        <Link to='/' onClick={() => setOpen(false)}>О нас</Link>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.30}}
                               className='topbarmobile__item'>
                        <Link to='/news' onClick={() => setOpen(false)}>Новости</Link>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.50}}
                               className='topbarmobile__item'>
                        <Link to='/consumers' onClick={() => setOpen(false)}>Физическим лицам</Link>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.70}}
                               className='topbarmobile__item'>
                        <Link to='/legal' onClick={() => setOpen(false)}>Юридическим лицам</Link>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.90}}
                               className='topbarmobile__item'>
                        <Link to='/meters' onClick={() => setOpen(false)}>Прием показаний</Link>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 1.1}}
                               className='topbarmobile__item'>
                        <Link to='/contacts' onClick={() => setOpen(false)}>Контакты</Link>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 1.3}}
                               className='topbarmobile__item'>
                        <Link to='/standarts' onClick={() => setOpen(false)}>Для раскрытия стандартов</Link>
                    </motion.li>
                </ul>
            }
        </div>
    )
}
