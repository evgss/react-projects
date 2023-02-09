import './adminboard.css'
import AdminTopbar from "../../components/AdminTopbar/AdminTopbar";
import AddNews from "../../components/AddNews/AddNews";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../redux/Context";
import axios from "axios";
import {Logout} from "../../redux/Actions";

export default function AdminBoard() {
    const {checkToken} = useContext(Context)
    //
    // const axiosInstance = axios.create({
    //     baseURL: "http://teploplus-uk.ru/api/"
    // })

    // useEffect(() => {
    //     const checkToken = async () => {
    //         const res = await axiosInstance.get('auth/check', {
    //             headers: {
    //                 "authorization": 'Bearer ' + token
    //             }
    //
    //         })
    //         if (res.data === 'Token is not valid!' || res.data === 'You are not authenticated!') {
    //             dispatch(Logout())
    //         }
    //     }
    //     checkToken()
    // }, [])

    checkToken()

    return (
        <div className='adminboard'>
            <AdminTopbar/>
            <AddNews/>
        </div>
    )
}
