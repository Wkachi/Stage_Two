// import Movie from './Card'

// const MovieContent =  (props) => {
//     const MovieCatalog = props.movieCatalog;
//     const Title = props.title;
//     const Release_date = props.release_date;
//     const Id = props.id;
//     const Overview = props.overview;
//     const Poster_path = props.poster_path;

//     return ( 
//         MovieCatalog.map((movie) =>
//         <div  className="movieInfo" key={movie.id}  title={movie.title} release_date = {movie.release_date}
//                  overview = {movie.overview}>
//             <p>{Id}</p> 
//             <p>{Poster_path}</p>       
//             <h2>{Title}</h2>
//             <p>{Release_date}</p>
//             <p>{Overview}</p>
//          </div>
//         )
     
//      )
// }
 
// export default MovieContent;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const TopTenMovies = () => {
// //   const [movies, setMovies] = useState([]);

// //   useEffect(() => {
// //     const fetchMovies = async () => {
// //       const response = await axios.get(
// //         'https://api.themoviedb.org/3/movie/top_rated?api_key=api_key=daa4b7176f933a7fa461ba81541a51da'
// //       );
// //       setMovies(response.data.results.slice(0, 10));
      
// //     }
// //     // .catch(error => {
// //     //     console.log(error);
// //     // }
// //     fetchMovies();
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Top 10 Movies</h2>
// //       <ul>
// //         {movies.map((movie) => (
// //           <li key={movie.id}>{movie.title}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TopTenMovies;
