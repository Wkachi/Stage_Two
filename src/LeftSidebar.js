import React from 'react';
import './index.css';
import tomato from './assets/tomato.svg';
import imdb from './assets/imdb.svg';




const LeftsideBar  = () => {

    return ( 
        <div className='write-up'>
            <div className='johnWick'>John Wick 3:<br></br><span>Parabellum</span>
        </div>
        <div className='imdb-Tomata'>
            
           <div className='imdb-writeUp'>
           <div className='imdb'></div>
            <p>860/100</p>
           </div>
           <div className='Tomato-writeUp'>
           <div className='Tomato'></div>
            <p>97%</p>
           </div>
            
        </div>
        <div className='summary'>
            <p>John Wick is on the run after killing a member
                of the international assasins' guild, and with
                a $14 million price tag on his head, he is the
                target of the hit men and women everywhere.
            </p>
           <div className='watchTrailer-div'>
           <div className='watchTrailer'>
               
               </div>
               <p>WATCH TRAILER</p>
           </div>
        </div>
        </div>
     );
}
 
export default LeftsideBar;