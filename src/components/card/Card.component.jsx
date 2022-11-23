import { Component } from 'react';
import './Card.styles.css'

class Card extends Component {

    render() {
        const { id, sprites, name, order } = this.props.pokemon;
        return (
            <div key={id} className='pokeCard'>
                <img className='pokeImg' src={sprites.front_default} alt={`${name} gif`}/>
                <h1 className='pokeName'>{name.toUpperCase()}</h1>
                <p>#{order}</p>
            </div>
        )
        
    }
}

export default Card;