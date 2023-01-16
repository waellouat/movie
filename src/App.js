
import './App.css';
import Add from './Component/Add';
import Navbarr from './Component/Navbar';
import { movies } from './Component/Movies';
import MovieListe from './Component/MovieListe';
import Filter from './Component/Filter';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Trailer from './Component/Trailer';

function App() {
const [movieListe,setMovieListe]=useState(movies)
const addhandler=(newmovie)=>{
  setMovieListe(
    [... movieListe , newmovie]
  )
}
const[search,setSearch]=useState("")
const[rate,setRate]=useState(1) 
  return (
    <div className="App">
<Routes>
<Route path='/' element={    <MovieListe movieListe={movieListe} search={search} rate={rate} />
}  />
<Route path='/trailer/:ID' element={<Trailer/> } />
</Routes>



      <Navbarr/>
    
    
    <Filter setSearch={setSearch} setRate={setRate} rate={rate} />
    <Add addhandler={addhandler} />
   
    
    </div>
  );
}

export default App;
