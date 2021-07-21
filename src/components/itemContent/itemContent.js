import React, {Component} from "react";
import Preloader from "../preloader";
import "./itemContent.css";
import ErrorMessage from "../errorMessage";

export default class ItemContent extends Component {
    state = {
        item: null,
        isLoading: false,
        error: false
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedItem !== this.props.selectedItem) {
            this.setState({isLoading: true});
            this.updateItem();
        }
    }

    updateItem() {
        const {selectedItem} = this.props;


        if (!selectedItem) {
            return;
        }

        this.props.getData(selectedItem).then((item) => {
            this.setState({item, isLoading: false})
        }).catch( (error) => {
            this.setState({
                error: true
            })
        })
    }


    render() {
        const {getImage, children} = this.props
        if(this.state.error){
            return <ErrorMessage/>
        } else if (this.state.isLoading) {
            return <Preloader/>
        } else if (!this.state.item) {
            return <span className="item-details-choose"> Please choose a character </span>
        }

        const {item} = this.state
        const {id, name} = item;

        return (
            <div className="item-details">
                <div className="item-details-img item-details-img-chosen">
                    <img src={getImage(id)} alt=""/>
                </div>

                <div className="person-details-info">
                    <h3 className="person-details-title">{name}</h3>
                    <div className="item-details-list">
                        {React.Children.map(children, (child) => {
                            return React.cloneElement(child, {item})
                        })}
                    </div>
                </div>
            </div>
        )
    }
}