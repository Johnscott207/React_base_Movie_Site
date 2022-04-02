import { useState } from "react";
import { Link } from "react-router-dom";
import defaultPoster from '../default-movie.jpg';
const MovieCard = ({movie})=>{
    //const [posterUrl,setPosterUrl] = useState('');
    //setPosterUrl(movie.poster_path)
    //const orignalPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    var posterUrl = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;

    const detailUrl = `/movies/${movie.id}`
    return(
      <div className=" col-lg-2 col-md-3 col-2 my-4">
        <div className="card" >
          <img className="card-img-top" src={posterUrl} onError={(e)=>{e.target.src=defaultPoster;}} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
         </div>
        </div>
      </div>
    )
  }

export default MovieCard;