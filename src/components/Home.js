import React, { Component } from 'react'
import { getQuery } from '../actions/index'
import LocationList from './LocationList'
import { withStyles } from '@material-ui/core/styles';
import { TextField, Container } from '@material-ui/core';
import img1 from '../assets/weather_app.svg'
import {connect} from 'react-redux'
import {compose} from 'redux';

const styles = (theme) => ({
    root:{
        padding: '1.5rem 1rem',
        height: 'auto'
    },
    searchContainer: {
        margin: 'auto'
    },
    img:{
        height: 'auto',
        width: '50%',
        margin: '1rem auto auto auto'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    searchBox: {
        width: '50%',
        borderRadius: '5px',
        '& label.Mui-focused': {
            color: '#aaa',
          },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ccc'
            },
            '&:hover fieldset': {
              borderColor: '#ccc',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ccc',
            }, 
        }
    }
  });

class Home extends Component {
   
    constructor(props){
        super(props)
    }

    searchInput = () => {
        return (
            <TextField id="outlined-basic" 
                label="Search City" 
                variant="outlined"
                className={this.props.classes.searchBox}
                onChange={ e => {
                    if(e.target.value === ""){
                        return this.props.getQuery()
                    }else{
                        return this.props.getQuery(e.target.value)
                    }
                }}
            />
        )
       
    }

    componentDidMount(){
        this.searchInput();
    }

    render() {
        const {classes} = this.props ? this.props : null;
        
        return (
            <Container maxWidth="md" className={classes.root}>

                <Container className={classes.searchContainer}>
                    <h1>Search For a City:</h1>

                    {this.searchInput()} <br/>
                    
                    <img className={classes.img} src={img1} alt="Girl with the weather app"/>
                </Container>
                

                {/* display search results */}
                <LocationList locations={this.props} />

            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        locations_result: state.locations.locations_result
    }
}

export default compose(connect(mapStateToProps, {getQuery}), withStyles(styles))(Home)