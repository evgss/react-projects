import './loginpage.css'
import {useContext, useState} from "react";
import {Context} from "../../redux/Context";
import {LoginFailure, LoginStart, LoginSuccess} from "../../redux/Actions";
import axios from "axios";

export default function LoginPage() {
    const axiosInstance = axios.create({
        baseURL: "http://teploplus-uk.ru/api/"
    })
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch, isFetching} = useContext(Context)
    const loginSubmitHandle = async (e) => {
        e.preventDefault()
        dispatch(LoginStart())
        try {
            const res = await axiosInstance.post('auth/login', {
                name, password
            })
            dispatch(LoginSuccess(res.data))
        } catch (err) {
            dispatch(LoginFailure())
        }
    }
    return (
        <div className='loginpage'>
            <div className="loginpage__inner">
                <div className="loginpage__title">
                    Кабинет администратора
                </div>
                <form className="loginpage__form" onSubmit={loginSubmitHandle}>
                    <label>Логин: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                    <label>Пароль: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {
                        isFetching ?
                            <button disabled={true} style={{cursor:'not-allowed'}} className="loginpage__form__btn" type='submit'>
                                Войти
                            </button>
                            :
                            <button className="loginpage__form__btn" type='submit'>
                                Войти
                            </button>
                    }
                </form>
            </div>
        </div>
    )
}
