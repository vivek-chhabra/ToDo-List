import React, { Component } from "react";
import "./Pokecard.css";
import img from "./images/pokemon (1).png";

class Pokecard extends Component {
    render() {
        console.log(img);
        return (
            <div className="Pokecard">
                <p className="Pokecard-head">{this.props.name}</p>
                <img src={img} alt="" />
                <div className="Pokecard-content">
                    <p>Type: {this.props.type}</p>
                    <p>Exp: {this.props.base_experence}</p>
                </div>
            </div>
        );

    }
}

export default Pokecard;
