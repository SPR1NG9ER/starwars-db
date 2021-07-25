import "./menu.css";
import {Link} from "react-router-dom";
const Menu = () => {
    return(
        <nav className="main-menu">
            <ul className="menu-list">
                <li className="menu-item"><Link to="/peoples/">Peoples</Link></li>
                <li className="menu-item"><Link to="/planets/">Planets</Link></li>
                <li className="menu-item"><Link to="/starships/">Starships</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;