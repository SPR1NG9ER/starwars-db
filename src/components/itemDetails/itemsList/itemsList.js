import "./itemList.css"
import {Component} from "react";
import SwapiService from "../../../services/swapi-service";
import Preloader from "../../preloader";

export default class ItemsList extends Component {
    swapiService = new SwapiService();

    state = {
        componentList: null,
    }


    componentDidMount() {
        const {getItems} = this.props;

        getItems()
            .then(componentList => this.setState({componentList}))
    }


    render() {


        const {componentList} = this.state;

        if (!componentList) {
            return <Preloader/>
        }

        const items = componentList.map((item, i) => {
            const labels = this.props.renderItem(item)

            if (i > 4) {
                return false;
            }
            return (
                <div className="items-list-item" onClick={() => this.props.onItemSelect(item.id)} key={item.id}>
                    <div className="items-list-name">{labels}</div>
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
