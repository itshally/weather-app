import React, { Component } from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux';
import {getLocationWeather} from '../actions/index'

import DisplayWeather from './DisplayWeather'

class LocationWeather extends Component {
    constructor(props){
        super(props)

        this.state = {
            woeid: 0
        }
    }

    updateLocationWeather = (woeid) => {
        if(this.props.match){
            woeid = this.props.match.params.woeid
            if(woeid !== undefined || woeid !== null || woeid !== 0){
                this.setState({woeid: woeid})
                this.props.getLocationWeather(woeid)
            }
        }
    }

    componentDidMount(){
        return setTimeout(() => {this.updateLocationWeather(this.state.woeid)}, 500)
    }

    render() {
        return (
            <>
                <DisplayWeather weather={this.props.location_weather}/>
            </>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        location_weather: state.locations.location_weather
    }
}

export default compose(connect(mapStateToProps, {getLocationWeather}))(LocationWeather)