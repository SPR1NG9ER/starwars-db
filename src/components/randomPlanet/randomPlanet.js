import "./randomPlanet.css";
import SwapiService from "../../services/swapi-service";
import {Component} from "react";
import Preloader from "../preloader";
import ErrorMessage from "../errorMessage";

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onError = () => {
        this.setState({error: true, loading: false});
    }

    onPlanetLoad = (planet) => {
        this.setState({planet, loading: false})
    }

    updatePlanet() {
        const id = Math.floor((Math.random() * 25)) + 3
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoad)
            .catch(this.onError)
    }

    render() {

        const {planet, loading, error} = this.state;
        const errorElement = error ? <ErrorMessage/> : null;
        let content;
        if(!errorElement){
            content = loading ? <Preloader/> : <PlanetContent planet={planet}/>
        }

        return (
            <div className="person-details">
                {errorElement}
                {content}
            </div>
        )

    }
}

const PlanetContent = ({planet}) => {

    const {name, population, rotationPeriod, diameter, id} = planet;


    return (
        <>
            <div className="person-details-img">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>

            <div className="person-details-info">
                <h3 className="person-details-title">{name}</h3>
                <div className="person-details-list">
                    <div className="person-details-item">
                        <span className="person-details-key">Население</span>
                        <span className="person-details-value">{population}</span>
                    </div>
                    <div className="person-details-item">
                        <span className="person-details-key">Время оборота</span>
                        <span className="person-details-value">{rotationPeriod}</span>
                    </div>
                    <div className="person-details-item">
                        <span className="person-details-key">Диаметер</span>
                        <span className="person-details-value">{diameter}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomPlanet;