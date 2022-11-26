import { useState, useEffect } from 'react'
import './App.css';
import PokemonList from './components/card-list/PokemonList.component';
import Search from './components/search-box/Search.component';

const App = () => {
  const [filter, setFilter] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSelectedPokemon] = useState(pokemon);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    let dataSet = new Set()
    for(let i = 1; i <= 100; i++){
      await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) 
        .then(resp => resp.json())
        .then(data => {
          dataSet.add(data)
        })
    }
    return dataSet
  }
  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const data = await getData();
      setLoading(false);
      setPokemon(Array.from(data.values()))
    }
    fetchPokemon()
  }, [])

  useEffect(() => {
    const newSearchedPokemon = pokemon.filter(p => p.name.toLowerCase().includes(filter));
    setSelectedPokemon(newSearchedPokemon);

  }, [pokemon, filter])

  const handleInputChange = (e) => {
    e.preventDefault();
    setFilter( e.target.value.toLowerCase())
  }

  const getLoading = () => {
    return !loading ? searchedPokemon.length > 0 ? <PokemonList pokemon={searchedPokemon} /> : <h1>Not Found</h1>: <h1>Loading...</h1> 
  }

  return (
    <div className="App">
      <h1 className="titleText">PokeDex</h1>
      <Search onSearch={handleInputChange} ph={"Search Pokemon"} className='search-box' />
      { getLoading() }
    </div>
  );
}


export default App;
