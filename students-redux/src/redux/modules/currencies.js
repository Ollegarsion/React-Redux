import _ from 'lodash'
import { createAction , handleActions } from 'redux-actions'
import { resolve, request, reject } from 'redux-promised'


// ------------------------------------
// Constants
// ------------------------------------
export const NAMESPACE = 'currencies'
export const GET_CURRENCIES = NAMESPACE+'/'+'GET_CURRENCIES'
export const REVERSE_CURRENCIES = NAMESPACE+'/'+'REVERSE_CURRENCIES'

//const url  = 'http://www.mocky.io/v2/5c49a1cf32000048310b5999'
const url  = 'http://km.softbistro.online:20080/coins/'


// ------------------------------------
// Actions
// ------------------------------------
const getCurrencies = () => {
    return{
        type: GET_CURRENCIES,
        meta: { promise: true },
        payload: fetch(url, {
            method: 'GET',
            mode:'cors'
        }).then(response=>response.json())

    }
}

export const reverseCurrencies  = createAction(REVERSE_CURRENCIES)


export const actions = {
    getCurrencies,
    reverseCurrencies
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [resolve(GET_CURRENCIES)]: (state, { payload }) => {
        return{...state, data:payload, dataFethcing:false}
    },
    [reject(GET_CURRENCIES)]: (state, { payload }) => ({...state, data:null, dataFethcing:false}),
    [request(GET_CURRENCIES)]: (state, { payload }) => ({...state, data:null, dataFethcing:true}),
    [REVERSE_CURRENCIES]:state => {return {...state, reversed:!state.reversed}}
},{reversed:false})

// ------------------------------------
// Helpers
// ------------------------------------



