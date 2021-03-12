
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import LocationWeather from './components/LocationWeather'

function App() {
  return (
    <div className="App">
      <Router>
          <div className="body-container">
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/:woeid" component={LocationWeather}/>
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
