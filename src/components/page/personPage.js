import Row from "../row";
import {PersonList} from "../sw-components/swItemList";
import PersonContent from "../itemContent/itemsContent/PersonContent";
import {withRouter} from "react-router-dom";

const PersonPage = ({match, history}) => {


    return (
        <Row left={<PersonList onItemSelect={(id) => {history.push(id)}}/>} right={<PersonContent itemId={match.params.id}/>}/>
    )
}

export default withRouter(PersonPage)