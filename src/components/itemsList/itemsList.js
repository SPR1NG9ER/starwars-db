import "./itemList.css"
import {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Preloader from "../preloader";

export default class ItemsList extends Component {
    swapiService = new SwapiService();

    state = {
        componentList: null
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then(componentList => this.setState({componentList}))
    }


    render() {

        const {componentList} = this.state;

        if (!componentList) {
            return <Preloader/>
        }

        const items = componentList.map(({name, id}) => {
            return (
                <div className="items-list-item" onClick={() => this.props.onItemSelect(id)} key={id}>
                    <div className="items-list-name">{name}</div>
                </div>
            )
        })


        return (
            <div className="items-list">
                {items}
            </div>
        )
    }
}

window.state = ItemsList.state;
