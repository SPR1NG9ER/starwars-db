import "./itemDetails.css";
import {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Preloader from "../preloader";
import ItemContent from "./itemContent";
import ItemsList from "./itemsList";
import Row from "../row";

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        isLoading: false,
        selectedItem: null,
        item: null,
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedItem !== this.state.selectedItem) {
            this.setState({isLoading: true});
            this.updatePerson();
        }
    }

    updatePerson() {
        const {selectedItem} = this.state;
        if (!selectedItem) {
            return;
        }

        this.swapiService.getPerson(selectedItem).then((item) => {
            this.setState({item, isLoading: false})
        })
    }

    onItemSelect = (id) => {
        this.setState({selectedItem: id});
    }

    render() {
        let content;
        const list = (
            <ItemsList onItemSelect={this.onItemSelect} getItems={this.props.getItems}
                       renderItem={this.props.renderItem}/>
        )

        if (this.state.isLoading) {
            content = <Preloader/>
        } else if (!this.state.item) {
            content = <span className="item-details-choose"> Please choose a character </span>
        } else {
            content = <ItemContent item={this.state.item}/>
        }




        return (
            <Row left={list} right={content}/>
        )
    }

}


