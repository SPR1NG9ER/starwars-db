import "./app.css";
import Header from "../header";
import PersonDetails from "../personDetails";
import ItemsList from "../itemsList";
import RandomPlanet from "../randomPlanet";
import {Component} from "react";

export default class App extends Component {
    state = {
        selectedItem: null,
    }

    onItemSelect = (id) => {
        this.setState({selectedItem : id});
    }

    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="item-list">
                    <ItemsList onItemSelect={this.onItemSelect}/>
                    <PersonDetails personId={this.state.selectedItem}/>
                </div>
            </div>
        )
    }
}
