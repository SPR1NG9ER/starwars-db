import ItemContent from "../index";
import StatField from "../../statField";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const StarshipContent = ({itemId, getData, getImage}) => {
    return (
        <ItemContent selectedItem={itemId} getData={getData} getImage={getImage}>
            <StatField label="model" value="model"/>
            <StatField label="length" value="length"/>
            <StatField label="cost" value="cost"/>
        </ItemContent>
    )
}

const methodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImage: swapiService.getStarshipImage,
    }
}

export default withSwapiService(methodsToProps)(StarshipContent);