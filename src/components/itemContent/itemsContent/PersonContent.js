import ItemContent from "../index";
import StatField from "../../statField";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const PersonContent = ({itemId, getData, getImage}) => {
    return (
        <ItemContent selectedItem={itemId} getData={getData} getImage={getImage}>
            <StatField label="Gender" value="gender"/>
            <StatField label="Birth Year" value="birthYear"/>
            <StatField label="Eye Color" value="eyeColor"/>
        </ItemContent>
    )
}

const methodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImage: swapiService.getPersonImage,
    }
}

export default withSwapiService(methodsToProps)(PersonContent);