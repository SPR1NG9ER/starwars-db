import "./app.css";
import Header from "../header";
import ItemDetails from "../itemDetails";
import RandomPlanet from "../randomPlanet";
import {Component} from "react";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <ItemDetails getItems={this.swapiService.getAllPeople} renderItem={({name, birthYear}) => `${name} ${birthYear} `}/>
                <ItemDetails getItems={this.swapiService.getAllPlanets} renderItem={({name, population}) => `${name} — ${population}`}/>
            </div>
        )
    }
}
