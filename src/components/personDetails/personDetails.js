import "./personDetails.css"
import {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Preloader from "../preloader";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        isLoading: false,
        person: null
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.personId !== this.props.personId) {
            this.setState({isLoading: true});
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }

        this.swapiService.getPerson(personId).then((person) => {
            this.setState({person, isLoading: false})
        })
    }

    render() {
        let content;
        if(this.state.isLoading){
            content = <Preloader/>
        } else if (!this.state.person) {
            content = <span className="person-details-choose"> Please choose a character </span>
        } else {
            content = <PersonContent person={this.state.person}/>
        }


        return (
            <div className="person-details">
                {content}
            </div>
        )
    }

}

const PersonContent = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person;

    return (
        <>
            <div className="person-details-img person-details-img-chosen">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </div>

            <div className="person-details-info">
                <h3 className="person-details-title">{name}</h3>
                <div className="person-details-list">
                    <div className="person-details-item">
                        <span className="person-details-key">Gender</span>
                        <span className="person-details-value">{gender}</span>
                    </div>
                    <div className="person-details-item">
                        <span className="person-details-key">Birth Year</span>
                        <span className="person-details-value">{birthYear}</span>
                    </div>
                    <div className="person-details-item">
                        <span className="person-details-key">Eye color</span>
                        <span className="person-details-value">{eyeColor}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

