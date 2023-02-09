import {createContext, useEffect, useReducer} from "react";
import Reducer from "./Reducer";
import {Logout} from "./Actions";
import axios from "axios";

const INITIAL_STATE = {
    token: JSON.parse(localStorage.getItem('token')) || null,
    metersSended: false,
    newsAdded: false,
    newsDeleted: false,
    newsUpdated: false,
    isFetching: false,
    error: false
}
export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) => {
    const axiosInstance = axios.create({
        baseURL: "http://teploplus-uk.ru/api/"
    })
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(state.token))
    }, [state.token])

    const checkToken = async () => {
        const res = await axiosInstance.get('auth/check', {
            headers: {
                "authorization": 'Bearer ' + state.token
            }

        })
        if (res.data === 'Token is not valid!' || res.data === 'You are not authenticated!') {
            state.token = null
        }
    }

    return (
        <Context.Provider value={{
            token: state.token,
            metersSended: state.metersSended,
            newsAdded: state.newsAdded,
            newsDeleted: state.newsDeleted,
            newsUpdated: state.newsUpdated,
            isFetching: state.isFetching,
            error: state.error,
            checkToken,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}
