import {SwapiServiceConsumer} from "../swapi-servie-context";

const withSwapiService = (methodsToComponent) => (Component) => {
    return (props) => {
        return <SwapiServiceConsumer>
            {
                (swapiService) => {
                    const serviceProps = methodsToComponent(swapiService)
                    return <Component {...props} {...serviceProps}/>
                }
            }
        </SwapiServiceConsumer>
    }
}

export default withSwapiService;