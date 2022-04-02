import Hero from "./Hero";
import MovieCard from "./MovieCard";

// f93496f75565c9e2dba785dc00746dbc
// https://api.themoviedb.org/3/movie/11?api_key=https://api.themoviedb.org/3/movie/550?api_key=f93496f75565c9e2dba785dc00746dbc&language=en-US



const SearchView = ({keyword, searchResults}) => {

  const title = `You are searching for "${keyword}"`;
  const resultsHtml = searchResults.map((obj,i)=>{
     return <MovieCard movie={obj} key={i} />
   })

   function IsResult(){
     if(resultsHtml.length>0){
       return resultsHtml;
     }else{
       return <h1>Results not Found for this Keyword: {keyword}</h1>
     }
   }
    return (
      <>
        <Hero text={title} />
          <div className="container">
            <div className="row">
              {<IsResult />}
            </div>
          </div>
      </>
    )
  }

  export default SearchView;