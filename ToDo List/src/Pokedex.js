import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard'

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: "Charmander", type: "fire", base_experence: 62, src: "./images/pokemon (1).png" },
            { id: 7, name: "Squirtile", type: "water", base_experence: 63, src: "./images/pokemon (2).png" },
            { id: 11, name: "Metapod", type: "bug", base_experence: 72, src: "./images/pokemon (3).png" },
            { id: 4, name: "Butterfree", type: "flying", base_experence: 178, src: "./images/pokemon (4).png" },
            { id: 25, name: "Jigglypuff", type: "normal", base_experence: 112, src: "./images/pokemon (5).png" },
            { id: 39, name: "Gengar", type: "poison", base_experence: 95, src: "./images/pokemon (6).png" },
            { id: 133, name: "Eevee", type: "normal", base_experence: 225, src: "./images/pokemon (7).png" },
            { id: 12, name: "pikachu", type: "electric", base_experence: 65, src: "./images/pokemon (8).png" }
        ]
    };
    render() {
        return(
            <div className='Pokedex'>
                <h1>Pokedex</h1>
                <div className="Pokedex-content">
                    {this.props.pokemon.map((ele) => (<Pokecard id={ele.id} name={ele.name} type={ele.type} base_experence={ele.base_experence} />))}
                </div>
            </div>
        )
    }
}

export default Pokedex;