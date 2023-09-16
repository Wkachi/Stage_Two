import React, { useState, useEffect } from "react";
import MovieContent from "./MovieContent";





    const Movie = (props) => {
        const Id = props.id
        const Title = props.title

        const [movieCatalog, setMovieCatalog] = useState([])
        const [IsLoading, setIsLoading] = useState(true)
        const [error, setError] = useState(null)

        const getMovie = () =>{ 
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=daa4b7176f933a7fa461ba81541a51da")
            .then(res =>{
                // if(!res.Ok){
                //      throw Error("Data not fetched") 

                //  }
                
                 return res.json()
                })   
                 .then(data => {
                     setMovieCatalog(data.results.slice(0, 10))
                    setIsLoading(false)
                    setError(null)
                    
                    
                })  
                .catch((err) =>{
                    // console.log(err.message)
                    setIsLoading(false)
                    setError(err.message)
                  })
            
            
            }
           
            useEffect( () =>{
                getMovie()
            },[])
           
          
               return ( 
                   <div   data-testid = "movie-card"  className="card">
                    <div className="featuredMovie">
                    <h4>Featured Movie</h4>
                    <p>See more</p>
                    </div>
                       {movieCatalog.map((movie) => (
                      <div  className="movieInfo" key={movie.id}  title={movie.title} release_date = {movie.release_date}>
                    <div  className="moviePoster">
                        <img  data-testid = "movie-poster" 
                       src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  alt="Image" />
                    </div>

                        <div  data-testid = "movie-title">{movie.title}</div>

                        <div data-testid = "movie-release-date"> {movie.release_date}</div>
                        
                      </div>
                       ))}
                        
                        { error && <div>{error}</div>}
                        { IsLoading && <div> "Loading..."</div>}
                        {/* {movieCatalog &&  <MovieContent  MovieCatalog={movieCatalog} poster_path title id release_date overview />} */}
                    
                   </div>
                   
                ) 
                  
    }
        
        // const movieData = data.results;
        // movieData.map((movie, index) => {
        //     <div data-testid = "movie-card" style="border-radius:6px,height:100px,width:100px;">Card

        //     <div data-testid = "movie-poster">Movie Poster</div>
    
        //     <div data-testid = "movie-title">movie title</div>
    
        //     <div data-testid = "movie-release-date"> movie release date</div>
    
        //     </div>
        // })
   

 
export default Movie;