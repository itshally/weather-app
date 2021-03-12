import axios from 'axios'
import {
    GET_LOCATION_QUERY,
    GET_LOCATION_WEATHER
} from './types'

export const getQuery = q => {
    return (dispatch) => {
        if(q !== "" || q !== undefined){
            axios.get(`${process.env.REACT_APP_NOT_SECRET_CODE}/https://www.metaweather.com/api/location/search/?query=${q}`)
                .then( response => {
                    const data = response.data
                    dispatch({
                        type: GET_LOCATION_QUERY,
                        payload: data
                    })
                }).catch(error => console.log(error))
        }
    }
}

export const getLocationWeather = woeid => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_NOT_SECRET_CODE}/https://www.metaweather.com/api/location/${woeid}`)
                .then( response => {
                    const data = response.data
                    dispatch({
                        type: GET_LOCATION_WEATHER,
                        payload: data
                    })
                }).catch(error => console.log(error))
    }
}