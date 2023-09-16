const MovieDetails = () => {
    return (  
        <div className="movieData">
          <div className="sideBar">
           
    
        <div className="sideMenu">
          <div className="movieLogo"><span>Movie Box</span></div>
                <div className="home"><span>Home</span></div>
                <div className="movieProjector1"><div className="movieProjector"><span>Movies</span></div></div>
                <div className="tv"><span>Tv <span>Series</span></span></div>
                <div className="calendar"><span>Upcoming</span></div>
            </div>
            <div className="freeTicket">
                <p>Play movie quizzes and earn free tickets</p>
                <p className="people">50k people are playing now</p>
                <button>Start playing</button>
            </div>
            <div className="logOut">
                {/* <img src="../src/assets/Logout.svg" alt="" /> */}
                <span>Log </span><span>out</span>
            </div>
        
          </div>

        </div>
    );
}
 
export default MovieDetails;