import React from 'react'
import moment from 'moment'
import {Grid, Card, Divider, Container, CardContent, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { BsArrowUp, BsArrowRight, BsArrowUpLeft, BsArrowLeft, BsArrowDown,
        BsArrowUpRight,BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: '75rem',
      margin: 'auto',
      '& p':{
        fontSize: '10.5pt !important',
      },
      '& .MuiCardContent-root': {
          backgroundColor: '#F8F8FB'
      }
    },
    media: {
      height: 140,
    },
    weatherIcon: {
        width: '5rem',
        padding: '1rem'
    },
    weatherStateLabel:{
        fontSize: '1.15rem',
        fontWeight: 'bold'  
    },
    weatherInfo: {
        color: '#363840',
        textAlign: 'left',
        '& span':{
            fontWeight: 'bold',
            marginRight: '10px'
        }
    }
  });

  //a function that checks the "wind_direction_compass" and then returns the right icon
  const getArrowIcon = x => {
        let icon = ""

        if (x === 'N'){
            icon = <BsArrowUp/>
        } else if (x === 'NE' || x === 'NNE' || x === 'ENE'){
            icon = <BsArrowUpRight/>
        }else if (x === 'NW' || x === 'WNW' || x === 'NNW'){
            icon = <BsArrowUpLeft/>
        }else if (x === 'S'){
            icon = <BsArrowDown/>
        } else if (x === 'SE' || x === 'ESE' || x === 'SSE'){
            icon = <BsArrowDownRight/>
        } else if (x === 'SW' || x === 'SSW' || x === 'WSW'){
            icon = <BsArrowDownLeft/>
        } else if (x === 'W'){
            icon = <BsArrowLeft/>
        } else if (x === 'E'){
            icon = <BsArrowRight/>
        }
        
        return icon
    }


const WeatherCard = (props) => {
    const classes = useStyles();

    if(props.data){
        return (
            <Grid container spacing={2} className={classes.root}>
                {
                    props.data.map( (label, i) => {
                        return (
                            <Grid item xs={12} sm={4} md={2} lg={2}>
                                <Card key={i}>
                                    <CardContent>
                                        <img 
                                            src={`https://www.metaweather.com/static/img/weather/${label.weather_state_abbr}.svg`}
                                            className={classes.weatherIcon}
                                        />
                                        <Typography variant="h5" component="h2">
                                            {moment(label.applicable_date).format('ddd DD MMM')}
                                        </Typography>
                                        <Typography variant="h6" component="h3" className={classes.weatherStateLabel}>
                                            {label.weather_state_name}
                                        </Typography>
                                        <Container className={classes.weatherInfo}>
                                            <p> 
                                                <span>Max:</span>
                                                {Math.trunc(label.max_temp)}&deg;C
                                            </p>
                                            <Divider />
                                            <p>
                                                <span>Min:</span>
                                                {Math.trunc(label.min_temp)}&deg;C
                                            </p>
                                            <Divider />
                                            <p>
                                                <span>Wind speed:</span> <br/>
                                                {getArrowIcon(label.wind_direction_compass)}
                                                {Math.floor(label.wind_speed)}mph
                                            </p>
                                            <Divider />
                                            <p>
                                                <span>Humidity:</span><br/>
                                                {label.humidity}&#37;
                                            </p>
                                            <Divider />
                                            <p>
                                                <span>Visibility:</span><br/>
                                                {Math.floor(label.visibility)} miles
                                            </p>
                                            <Divider />
                                            <p>
                                                <span>Pressure:</span><br/>
                                                {Math.floor(label.air_pressure)}mb
                                            </p>
                                            <Divider />
                                            <p>
                                                <span>Confidence:</span><br/>
                                                {label.predictability}&#37;
                                            </p>
                                        </Container>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}

export default WeatherCard