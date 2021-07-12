import "./menu.css";
const Menu = () => {
    return(
        <nav className="main-menu">
            <ul className="menu-list">
                <li className="menu-item"><a href="#">Peoples</a></li>
                <li className="menu-item"><a href="#">Planets</a></li>
                <li className="menu-item"><a href="#">Starships</a></li>
            </ul>
        </nav>
    )
}

export default Menu;