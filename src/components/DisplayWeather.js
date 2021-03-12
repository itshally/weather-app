import React from 'react'
import moment from 'moment'
import WeatherCard from './WeatherCard'
import Loader from "react-loader-spinner";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    city: {
      color: '#6C707F',
      fontSize: '3.5rem',
      margin: 'auto',
      padding: '1rem 0'
    },
    spinner: {
        margin: '5rem auto'
    },
    weatherContent: {
        color: '#363840',
        fontSize: '1.15rem',
        alignContent: 'center',
        justifyContent: 'center'
    }
}));
  
const DisplayWeather = (props) => {
    const classes = useStyles();

    if(props.weather || props.weather.legth !== 0){
        const {title, time, sun_rise, sun_set, consolidated_weather} = props.weather
        return (
            <Container maxWidth="lg">
                <h2 className={classes.city}>{title}</h2>
                <Grid container spacing={3} className={classes.weatherContent}>
                    {
                        time && sun_rise && sun_set 
                        ? <>
                            <Grid item xs={12} sm={3} md={3}>
                                <h5>Time: {moment(time).format('hh:mm A')}</h5>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <h5>Sunrise: {moment(sun_rise).format('hh:mm A')}</h5>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <h5>Sunset: {moment(sun_set).format('hh:mm A')}</h5>
                            </Grid>
                            <WeatherCard data={consolidated_weather}/>
                        </>
                        : <div className={classes.spinner}>
                            <Loader
                                type="Puff"
                                color="#b4bad4"
                                height={150}
                                width={150}
                                timeout={3000} //3 secs
                            />
                        </div>
                    }
                </Grid>
            </Container>
        )
    }
}

export default DisplayWeather