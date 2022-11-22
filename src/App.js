import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: []
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.pokemon.map((poke) => 
            <div key={poke.id}>
              <img src={poke.sprites.front_default} alt={`${poke.name} gif`}/>
              <h1>{poke.name}</h1>
            </div>
          )
        }
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
}



export default App;
