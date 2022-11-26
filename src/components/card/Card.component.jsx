import './Card.styles.css'

const Card = ({ pokemon }) => {
    const { id, name, sprites, order } = pokemon;
    return (
        <div key={id} className='pokeCard'>
            <img className='pokeImg' src={sprites.front_default} alt={`${name} gif`}/>
            <h1 className='pokeName'>{name.toUpperCase()}</h1>
            <p>#{order}</p>
        </div>
    )
}

export default Card;