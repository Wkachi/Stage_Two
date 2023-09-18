import HeroPage from './Hero';
import Movie from './Card'
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Navbar';
import MovieDetails from './MovieDetails';



function App() {
  return (
    <Router basename="/React">
        <div className="App">
       
       <div className='content'>

       <Switch>
        <Route exact path="/">
        <HeroPage/>
        </Route>
        <Route path="/movies-1">
        <MovieDetails/>
        </Route>
       </Switch>
       
       </div>
     </div>
    </Router>
  );
}

export default App;
