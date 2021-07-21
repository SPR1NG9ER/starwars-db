import ItemsList from "../itemsList";
import withData from "../hoc-helpers/withData";
import withChildList from "../hoc-helpers/withChildList";
import withSwapiService from "../hoc-helpers/withSwapiService";

const personMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const planetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const starshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const compose = (...func) => (component) => {
    return func.reduceRight((previousValue, f) => f(previousValue), component)
}

const renderName = ({name}) => <span>{name}</span>

const PersonList = compose(
                        withSwapiService(personMethodsToProps),
                        withData,
                        withChildList(renderName)
                    )(ItemsList)


const PlanetList = compose(
                        withSwapiService(planetMethodsToProps),
                        withData,
                        withChildList(renderName)
                    )(ItemsList)

const StarshipList = compose(
                        withSwapiService(starshipMethodsToProps),
                        withData,
                        withChildList(renderName)
                    )(ItemsList)

export {PersonList, PlanetList, StarshipList}

