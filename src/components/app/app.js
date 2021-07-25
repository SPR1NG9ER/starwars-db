import "./app.css";
import Header from "../header";
import RandomPlanet from "../randomPlanet";
import {Component} from "react";
import {SwapiServiceProvider} from "../swapi-servie-context";
import SwapiService from "../../services/swapi-service";
import {PersonPage, PlanetPage, StarshipPage} from "../page";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarshipContent from "../itemContent/itemsContent/StarshipContent";
import NotExistPage from "../notExistPage";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className="container">
                        <Header/>
                        <div className="content">
                            <RandomPlanet timeUpdate={10000}/>
                            <Switch>
                                <Route path="/" exact />
                                <Route path="/peoples/:id?" component={PersonPage}/>
                                <Route path="/planets" component={PlanetPage}/>
                                <Route path="/starships" component={StarshipPage} exact/>

                                <Route path="/starships/:id" render={ ({match}) => {
                                    return <StarshipContent itemId={match.params.id}/>
                                }}/>

                                <Route render={() => {
                                    return <NotExistPage/>
                                }}/>
                            </Switch>

                        </div>
                    </div>
                </Router>
            </SwapiServiceProvider>
        )
    }
}
