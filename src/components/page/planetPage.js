import {Component} from "react";
import Row from "../row";
import {PlanetList} from "../sw-components/swItemList";
import PlanetContent from "../itemContent/itemsContent/PlanetContent";

export default class PlanetPage extends Component {
    state = {
        itemId : null
    }

    onItemSelect = (id) => {
        this.setState({
            itemId: id
        })
    }

    render() {
        return (
            <Row left={<PlanetList onItemSelect={this.onItemSelect} />} right={<PlanetContent itemId={this.state.itemId}/>}/>
        )
    }
}