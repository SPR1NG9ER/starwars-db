import ItemContent from "../index";
import StatField from "../../statField";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const PlanetContent = ({itemId, getData, getImage}) => {
    return (
        <ItemContent selectedItem={itemId} getData={getData} getImage={getImage}>
            <StatField label="population" value="population"/>
            <StatField label="Rotation Period" value="rotationPeriod"/>
            <StatField label="diameter" value="diameter"/>
        </ItemContent>
    )
}

const methodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImage: swapiService.getPlanetImage,
    }
}

export default withSwapiService(methodsToProps)(PlanetContent)