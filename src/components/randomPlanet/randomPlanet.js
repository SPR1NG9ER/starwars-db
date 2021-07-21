import "./randomPlanet.css";
import SwapiService from "../../services/swapi-service";
import {Component} from "react";
import Preloader from "../preloader";
import ErrorMessage from "../errorMessage";
import PlanetContent from "../itemContent/itemsContent/PlanetContent";
import PropTypes from "prop-types";

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        loading: true,
        error: false
    }

    onError = () => {
        this.setState({error: true, loading: false});
    }

    onPlanetLoad = (planet) => {
        this.setState({planet, loading: false})
    }

    componentDidMount() {
        this.updatePlanet();
        this.updateInterval = setInterval(this.updatePlanet, this.props.timeUpdate)
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval)
    }

    updatePlanet = () => {
        const id = Math.floor((Math.random() * 25)) + 3;
        this.setState({
            planetId: id,
            loading: false
        })
    }

    render() {

        const { loading, error} = this.state;
        const errorElement = error ? <ErrorMessage/> : null;
        let content;
        if(!errorElement){
            content = loading ? <Preloader/> : <PlanetContent itemId={this.state.planetId}/>
        }

        return (
            <div className="person-details">
                {errorElement}
                {content}
            </div>
        )

    }
}

RandomPlanet.defaultProps = {
    timeUpdate: 3000
}

RandomPlanet.propTypes = {
    timeUpdate: PropTypes.number
}
export default RandomPlanet;