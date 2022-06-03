import {useEffect} from 'react'
import SearchIcon from './Search.svg'
import './App.css';

const App = ()=> {

const searchMovies = async(title)=>{
  const api = await fetch(`http://omdbapi.com/?apikey=9eb261b1&s=${title}`)
  const data = await api.json()
   
  console.log(data);
}

useEffect(()=>{
  searchMovies('Spiderman')
},[])  

  return (
    <div className="app">
    <h1>MovieLand</h1>
    <div className='search'>
      <input
          placeholder='Search for movies'
          value="superman"
          onChange={()=>{}}
      />
      <img 
        src={SearchIcon}
        alt="Search"
        onClick={()=>{}}
      />
    </div>
    </div>
  );
}

export default App;
