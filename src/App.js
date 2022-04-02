import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutView from './Components/AboutView';
import {Routes,Route} from 'react-router-dom';
import SearchView from './Components/SearchView';
import { useState , useEffect } from 'react';
import MovieView from './Components/MovieView';
import PageNotFound from './Components/PageNotFound';
import Footer from './Components/Footer';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('star');

useEffect(()=>{
  console.log(searchText ,"search for this")
  if(searchText){
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=f93496f75565c9e2dba785dc00746dbc&language=en-US&query=${searchText}&page=1&  include_adult=false`)
    .then(response=>response.json())
    .then(data=>{
      setSearchResults(data.results)
      console.log(data)
   })
  } 

},[searchText])



  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact  element={<AboutView />} />   
        <Route path="/search" exact element={<SearchView  keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" exact  element={<MovieView />} />   
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
