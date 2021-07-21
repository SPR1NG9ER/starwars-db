import Preloader from "../preloader";
import {Component} from "react";

const withData = (RenderComponent) => {
    return class extends Component{

        state = {
            listData: null,
        }

        componentDidMount() {

            this.props.getData()
                .then(listData => this.setState({listData}))
        }

        render() {

            const {listData} = this.state;

            if (!listData) {
                return <Preloader/>
            }

            return <RenderComponent {...this.props} listData={listData}/>
        }
    }
}


export default withData;
