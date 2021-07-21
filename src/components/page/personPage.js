import {Component} from "react";
import Row from "../row";
import {PersonList} from "../sw-components/swItemList";
import PersonContent from "../itemContent/itemsContent/PersonContent";

export default class PersonPage extends Component {
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
            <Row left={<PersonList onItemSelect={this.onItemSelect} />} right={<PersonContent itemId={this.state.itemId}/>}/>
        )
    }
}