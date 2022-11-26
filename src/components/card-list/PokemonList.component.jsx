import Card from '../card/Card.component';
import './PokemonList.styles.css'

const PokemonList = ({pokemon}) =>{
    const getPokemonCards = () => pokemon.map((poke) => <Card key={poke.id} pokemon={poke} />)
    return (
        <div className='cardList'>
            { getPokemonCards() }
        </div>
    )
    
}

export default PokemonList;