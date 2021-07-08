import "./header.css"
import Menu from "./menu";

const Header = () => {
    return(
        <header className="header">
            <div className="header-logo"><h1>StarDB</h1> <span>by SPR1NG</span></div>
            <Menu />
        </header>
    )
}


export default Header