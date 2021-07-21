// import ItemContent from "../itemDetails/itemContent";
// import StatField from "../statField";
// import withSwapiService from "../hoc-helpers/withSwapiService";
//
//
// const PersonContent = ({swapiService}) => {
//
//     const {getPerson, getPersonImage} = swapiService
//
//     return (
//         <ItemContent selectedItem={4} getData={getPerson} getImage={getPersonImage}>
//             <StatField label="Gender" value="gender"/>
//             <StatField label="Birth Year" value="birthYear"/>
//             <StatField label="Eye Color" value="eyeColor"/>
//         </ItemContent>
//     )
// }
//
// const PlanetContent = () => {
//     return (
//         <ItemContent selectedItem={4} getData={getPlanet} getImage={getPlanetImage}>
//             <StatField label="population" value="population" />
//             <StatField label="Rotation Period" value="rotationPeriod" />
//             <StatField label="diameter" value="diameter" />
//         </ItemContent>
//     )
// }
//
// const StarshipContent = () => {
//     return (
//         <ItemContent selectedItem={9} getData={getStarship} getImage={getStarshipImage}>
//             <StatField label="model" value="model" />
//             <StatField label="length" value="length" />
//             <StatField label="cost" value="cost" />
//         </ItemContent>
//     )
// }
//
//
// export default withSwapiService(PersonContent);