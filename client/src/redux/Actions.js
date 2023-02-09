export const LoginStart = (userCredentials) => ({
    type: 'LOGIN_START'
})
export const LoginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: token
})
export const LoginFailure = () => ({
    type: 'LOGIN_FAILURE'
})
export const Logout = () => ({
    type: 'LOGOUT'
})

export const SendingStart = ()=>({
    type: 'METERS_START'
})

export const SendingSuccess = ()=>({
    type: 'METERS_SUCCESS'
})

export const SendingFailure = ()=>({
    type: 'METERS_FAILURE'
})

export const AddNewsStart = ()=>({
    type: 'ADD_NEWS_START'
})

export const AddNewsSuccess = ()=>({
    type: 'ADD_NEWS_SUCCESS'
})

export const AddNewsFailure = ()=>({
    type: 'ADD_NEWS_FAILURE'
})

export const DeleteNewsStart = ()=>({
    type: 'DELETE_NEWS_START'
})

export const DeleteNewsSuccess = ()=>({
    type: 'DELETE_NEWS_SUCCESS'
})

export const DeleteNewsFailure = ()=>({
    type: 'DELETE_NEWS_FAILURE'
})
export const UpdateNewsStart = ()=>({
    type: 'UPDATE_NEWS_START'
})

export const UpdateNewsSuccess = ()=>({
    type: 'UPDATE_NEWS_SUCCESS'
})

export const UpdateNewsFailure = ()=>({
    type: 'UPDATE_NEWS_FAILURE'
})
