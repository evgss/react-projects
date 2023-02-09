import './admintopbar.css'
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../redux/Context";
import {Logout} from "../../redux/Actions";
import axios from "axios";
let xlsx = require("json-as-xlsx")

export default function AdminTopbar() {
    const [meters, setMeters] = useState([])
    const {dispatch,token} = useContext(Context)

    const axiosInstance = axios.create({
        baseURL:"http://teploplus-uk.ru/api/"
    })

    useEffect(() => {
        const fetchMeters = async () => {
            const res = await axiosInstance.get('meters/', {
                headers: {
                    "authorization": 'Bearer ' + token
                }
            })
            setMeters(res.data)
        }
        fetchMeters()
    }, [])

    let data = [
        {
            sheet: "Показания счетчиков",
            columns: [
                {label: "Лицевой счет", value: "personal_account"},
                {label: "Населенный пункт", value: "locality"},
                {label: "Улица", value: "street"},
                {label: "Номер дома", value: "house_number"},
                {label: "Корпус", value: "building"},
                {label: "Квартира", value: "apartment"},
                {label: "Холодная вода", value: "cold_water"},
                {label: "Горячая вода", value: "hot_water"},
                {label: "Дата внесения", value: "createdAt"}
            ],
            content: meters,
        }
    ]
    let settings = {
        fileName: "Показания",
        extraLength: 3
    }
    const handleDownload = () => {
        xlsx(data, settings)
    }
    const handleLogout = () => {
        dispatch(Logout())
    }

    return (
        <div className='admintopbar'>
            <Link className='admintopbar__link' to='/'>Основной сайт</Link>
            <Link className='admintopbar__link' to='/board'>Создать новость</Link>
            <button className='admintopbar__downloadBtn' onClick={() => handleDownload()}>Скачать показания</button>
            <button className='admintopbar__exitBtn' onClick={() => handleLogout()}>Выйти</button>
        </div>
    )
}
