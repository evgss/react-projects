const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                token: null,
                isFetching: true,
                error: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload,
                isFetching: false,
                error: false
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                token: null,
                isFetching: false,
                error: true
            }
        case 'LOGOUT':
            return {
                token: null,
                isFetching: false,
                error: false
            }
        case 'METERS_START':
            return {
                ...state,
                metersSended: false,
                isFetching: true,
                error: false
            }
        case 'METERS_SUCCESS':
            return {
                ...state,
                metersSended: true,
                isFetching: false,
                error: false
            }
        case 'METERS_FAILURE':
            return {
                ...state,
                metersSended: false,
                isFetching: false,
                error: true
            }
        case 'ADD_NEWS_START':
            return {
                ...state,
                newsAdded: false,
                isFetching: true,
                error: false
            }
        case 'ADD_NEWS_SUCCESS':
            return {
                ...state,
                newsAdded: true,
                isFetching: false,
                error: false
            }
        case 'ADD_NEWS_FAILURE':
            return {
                ...state,
                newsAdded: false,
                isFetching: false,
                error: true
            }
        case 'DELETE_NEWS_START':
            return {
                ...state,
                newsDeleted: false,
                isFetching: true,
                error: false
            }
        case 'DELETE_NEWS_SUCCESS':
            return {
                ...state,
                newsDeleted: true,
                isFetching: false,
                error: false
            }
        case 'DELETE_NEWS_FAILURE':
            return {
                ...state,
                newsDeleted: false,
                isFetching: false,
                error: true
            }
        case 'UPDATE_NEWS_START':
            return {
                ...state,
                newsUpdated: false,
                isFetching: true,
                error: false
            }
        case 'UPDATE_NEWS_SUCCESS':
            return {
                ...state,
                newsUpdated: true,
                isFetching: false,
                error: false
            }
        case 'UPDATE_NEWS_FAILURE':
            return {
                ...state,
                newsUpdate: false,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
export default Reducer
