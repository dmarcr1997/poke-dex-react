import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      filter: ''
    };
  }
  render() {
    return (
      <div className="App">
        <label></label>
        <input className='search-box' type='search' placeholder='Search Pokemon' onChange={this.handleInputChange}/>
        { this.getPokemon() }
      </div>
    );
  }

  async componentDidMount() {
    let dataSet = new Set()
    for(let i = 1; i <= 20; i++){
      await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) 
        .then(resp => resp.json())
        .then(data => {
          dataSet.add(data)
        })
    }
    this.setState({ pokemon: Array.from(dataSet.values()) })
  }

  getPokemon() {
    const { pokemon, filter } = this.state
    return pokemon.filter(p => p.name.toLowerCase().includes(filter))
      .map((poke) => 
        <div key={poke.id}>
          <img src={poke.sprites.front_default} alt={`${poke.name} gif`}/>
          <h1>{poke.name.toUpperCase()}</h1>
        </div>
      )
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ filter: e.target.value.toLowerCase() })
  }
}



export default App;
