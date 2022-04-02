import { useEffect, useState } from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";


const Home = () => {
  //const url = "https://api.themoviedb.org/3/movie/popular?api_key=f93496f75565c9e2dba785dc00746dbc&language=en-US&page=1"

  const [homeResults, setHomeResults] = useState([]);
  const [Page, setPage] = useState('1');
  const [totalPages,setTotalPages] = useState('1');
  
useEffect(()=>{
  console.log(Page ,"search for this")
  if(Page){
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=f93496f75565c9e2dba785dc00746dbc&language=en-US&query=${Page}&page=1&  include_adult=false`)
    .then(response=>response.json())
    .then(data=>{
      setHomeResults(data.results)
      setTotalPages(data.total_pages);
      //console.log(data)
   })
  } 

},[Page])


const resultsHtml = homeResults.map((obj,i)=>{
  return <MovieCard movie={obj} key={i} />
})
    return (
      <>
        <Hero text="HomePage" />
        <div className="container">
            <div className="row">
              {resultsHtml}
            </div>
        </div>
        <Pagination page={Page} setPage={setPage} totalPages={totalPages} />
      </>
    )
  }

  export default Home;