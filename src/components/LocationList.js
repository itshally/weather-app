import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import {List, ListItem, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 725,
      margin: '1.5rem auto auto auto',
      backgroundColor: theme.palette.background.paper,
      '& h3':{
          margin: 'auto auto 1rem auto',
          padding: '5px'
      }
    },
    listItem: {
        border: '1px solid #ccc',
        padding: '15px',
        fontSize: '1.05rem',
        letterSpacing: '1px',
        color: '#555'
    },
    emptyDataContainer:{
        margin: '2rem auto'
    }
  }));

const LocationList = (props) => {
    const classes = useStyles();

    if(props.locations){
        if(props.locations.locations_result.length !== 0){
            return (
                <React.Fragment>
                    <List component="nav" className={classes.root}>
                        <h3>Search Results:</h3>
                        {
                            props.locations.locations_result.map((location, i) => {

                                return (
                                    <Link to={`/${location.woeid}`}>
                                        <a href={`/${location.woeid}`} style={{textDecoration:'none'}}>
                                            <ListItem key={i} button className={classes.listItem}>{location.title}</ListItem>
                                        </a>
                                    </Link>
                                )
                            })
                        }

                    </List>
                </React.Fragment>
            )
        }else{
            return (
                <Container maxWidth="md" className={classes.emptyDataContainer}>
                    <h2>Nothing to display</h2>
                </Container>
            )
        }
    }
}

export default LocationList