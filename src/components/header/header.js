import "./header.css"
import Menu from "./menu";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
           <Link to="/"><div className="header-logo"><h1>StarDB</h1> <span>by SPR1NG</span></div></Link>
            <Menu />
        </header>
    )
}


export default Header