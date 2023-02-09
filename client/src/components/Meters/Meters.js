import './meters.css'
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {Context} from "../../redux/Context";
import {SendingFailure, SendingStart, SendingSuccess} from "../../redux/Actions";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function Meters() {
    const [account, setAccount] = useState('')
    const [locality, setLocality] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [building, setBuilding] = useState('')
    const [apartment, setApartment] = useState('')
    const [cold, setCold] = useState('')
    const [hot, setHot] = useState('')
    const [captchaToken, setCaptchaToken] = useState('')

    const key = '6Lf3QQgfAAAAAMBKT_IIIE8RUHLe6OLxv30VV9F0'

    const {dispatch, isFetching, metersSended, error} = useContext(Context)
    const axiosInstance = axios.create({
        baseURL: "http://teploplus-uk.ru/api/"
    })

    useEffect(() => {
        const notify = () => {
            if (metersSended) {
                toast.success('Данные успешно отправлены!', {
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
    }, [metersSended, error])


    const metersHandler = async (e) => {
        e.preventDefault()
        if (captchaToken) {
            const newMeters = {
                personal_account: account,
                locality, street, house_number: house, building, apartment,
                cold_water: cold, hot_water: hot
            }
            dispatch(SendingStart())
            try {
                await axiosInstance.post('meters/', newMeters)
                dispatch(SendingSuccess())
            } catch (err) {
                dispatch(SendingFailure())
            }
            setAccount('')
            setLocality('')
            setStreet('')
            setHouse('')
            setBuilding('')
            setApartment('')
            setCold('')
            setHot('')
        }
    }


    return (
        <div className='meters'>
            <div className="meters__line">
            </div>
            <div className="meters__title">
                Прием показаний счетчиков
            </div>
            <div className="meters__notice">
                Внимание! Рекомендуем передавать показания с 10 по 20 число каждого месяца.
            </div>

            <form className='meters__form' onSubmit={metersHandler}>
                <div className="meters__form__title">
                    Личные данные:
                </div>
                <div className="meters__form__check">
                    <label>Лицевой счет:</label>
                    <input
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        type="text"
                    />
                    <label>Населенный пункт:</label>
                    <input
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)} type="text"
                        required
                    />
                </div>
                <div className="meters__form__location">
                    <label>Улица:</label>
                    <input value={street}
                           onChange={(e) => setStreet(e.target.value)}
                           type="text"
                           required
                    />
                    <label>Дом:</label>
                    <input
                        value={house}
                        onChange={(e) => setHouse(e.target.value)}
                        type="text"
                        required
                    />
                </div>

                <div className="meters__form__location">
                    <label>Корпус:</label>
                    <input
                        value={building}
                        onChange={(e) => setBuilding(e.target.value)}
                        type="text"
                    />
                    <label>Квартира:</label>
                    <input value={apartment}
                           onChange={(e) => setApartment(e.target.value)}
                           type="text" required
                    />
                </div>

                <div className="meters__form__title">
                    Показания счетчиков:
                </div>
                <div className="meters__form__water">
                    <label>Холодная вода:</label>
                    <input
                        value={cold}
                        onChange={(e) => setCold(e.target.value)}
                        type="text" required
                    />
                    <label>Горячая вода:</label>
                    <input
                        value={hot}
                        onChange={(e) => setHot(e.target.value)}
                        type="text"
                        required
                    />
                </div>
                <ReCAPTCHA
                    className='meters__form__captcha'
                    sitekey={key}
                    size='normal'
                    hl='ru'
                    onChange={(e) => setCaptchaToken(e)}
                />
                {
                    isFetching ?
                        <button className='meters__form__btn' disabled={true} style={{cursor: 'not-allowed'}}
                                type='submit'>Передать показания</button>
                        :
                        <button className='meters__form__btn' type='submit'>Передать показания</button>
                }
            </form>
        </div>
    )
}
