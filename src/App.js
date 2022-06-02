import {useEffect} from 'react'
import './App.css';

const App = ()=> {

const onLoading = async(title)=>{
  const api = await fetch(`http://omdbapi.com/?apikey=9eb261b1&s=${title}`)
  const data = await api.json()
   
  console.log(data);
}

useEffect(()=>{
  onLoading('Spiderman')
},[])  

  return (
    <div className="App">
     hello
    </div>
  );
}

export default App;
