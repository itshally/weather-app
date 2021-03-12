import {
    GET_LOCATION_QUERY,
    GET_LOCATION_WEATHER
} from '../actions/types'

const INITIAL_STATE = {
    loading: true,
    locations_result: [],
    location_weather: []
}

const locations = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_LOCATION_QUERY:
            return {
                loading: false,
                locations_result: action.payload
            }
        case GET_LOCATION_WEATHER:
            return {
                location: false,
                location_weather: action.payload
            }
        default:{
            return state
        }
    }
}

export default locations