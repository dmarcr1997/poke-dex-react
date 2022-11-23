import { Component } from 'react'
import './App.css';
import PokemonList from './components/card-list/PokemonList.component';
import Search from './components/search-box/Search.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      fltr: ''
    };
  }
  render() {
    const { handleInputChange } = this;
    const { pokemon, fltr } = this.state;
    let searchedPokemon = pokemon.filter(p => p.name.toLowerCase().includes(fltr));
    return (
      <div className="App">
        <h1 className="titleText">PokeDex</h1>
        <Search onSearch={handleInputChange} ph={"Search Pokemon"} className='search-box' />
        { !!searchedPokemon ? <PokemonList pokemon={searchedPokemon} /> : <h1>Loading...</h1> }
      </div>
    );
  }

  async componentDidMount() {
    let dataSet = new Set()
    for(let i = 1; i <= 100; i++){
      await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) 
        .then(resp => resp.json())
        .then(data => {
          dataSet.add(data)
        })
    }
    this.setState({ pokemon: Array.from(dataSet.values()) })
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ fltr: e.target.value.toLowerCase() })
  }
}



export default App;
