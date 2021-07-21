import {Component} from "react";
import Row from "../row";
import {StarshipList} from "../sw-components/swItemList";
import StarshipContent from "../itemContent/itemsContent/StarshipContent";

export default class StarshipPage extends Component {
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
            <Row left={<StarshipList onItemSelect={this.onItemSelect} />} right={<StarshipContent itemId={this.state.itemId}/>}/>
        )
    }
}