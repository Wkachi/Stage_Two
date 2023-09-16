import React from 'react';
import {useState, useEffect} from 'react'
import NavBar from './Navbar'
import LeftsideBar from './LeftSidebar'
import Movie from './Card'
import Poster from './assets/Poster.svg'
import MovieDetails from './MovieDetails';
import MovieContent from './MovieContent';

const HeroPage = () => {

 

    return (
        <div>
       
       
            <div className='heroPage'>
            <NavBar />
            <LeftsideBar />
             <Movie />  
             <MovieDetails />
             {/* <MovieContent /> */}
            
            </div>

        </div>
        
    )
}

export default HeroPage;