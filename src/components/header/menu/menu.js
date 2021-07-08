import "./menu.css";
const Menu = () => {
    return(
        <nav className="main-menu">
            <ul className="menu-list">
                <li className="menu-item"><a href="#">Люди</a></li>
                <li className="menu-item"><a href="#">Планеты</a></li>
                <li className="menu-item"><a href="#">Звездолёты</a></li>
            </ul>
        </nav>
    )
}

export default Menu;