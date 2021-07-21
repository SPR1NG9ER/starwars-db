import "./app.css";
import Header from "../header";
import RandomPlanet from "../randomPlanet";
import {Component} from "react";
import {SwapiServiceProvider} from "../swapi-servie-context";
import SwapiService from "../../services/swapi-service";
import PersonPage from "../page/personPage";
import PlanetPage from "../page/planetPage";
import StarshipPage from "../page/starshipPage";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div className="container">
                    <Header/>
                    <RandomPlanet/>

                    <PersonPage/>

                    <PlanetPage/>

                    <StarshipPage/>
                </div>
            </SwapiServiceProvider>
        )
    }
}
