import {StarshipList} from "../sw-components/swItemList"
import {withRouter} from "react-router-dom"

const StarshipPage = ({history}) => {

        return (
            <StarshipList onItemSelect={(itemId) => {
                history.push(`${itemId}`)
            }} />
        )
}

export default withRouter(StarshipPage);