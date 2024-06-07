import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom'
import Home from './Components/home/home';
import MusicHub from './Components/music/musicHub/MusicHub';
import MoviesHub from './Components/movies/moviesHub/MoviesHub';
import Navbar from './Components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1>Media Tracker</h1>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/music" component={MusicHub} />
            <Route path="/movies" component={MoviesHub} />
          </Switch>
      </Router>
    </div>
  );
}
