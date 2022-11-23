import { Component } from 'react';
import Card from '../card/Card.component';

import './PokemonList.styles.css'

class PokemonList extends Component {

    render() {
        return (
            <div className='cardList'>
                { this.getPokemonCards() }
            </div>
        )
        
    }

    getPokemonCards = () => {
        const { pokemon } = this.props;
        return pokemon.map((poke) => {
            return(
                <Card pokemon={poke} />
            )
        }
        )
    }
}

export default PokemonList;