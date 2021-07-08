import "./app.css";
import Header from "../header";
import PersonDetails from "../personDetails";
import ItemsList from "../itemsList";
import RandomPlanet from "../randomPlanet";

const App = () => {
    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <ItemsList />
            <PersonDetails />
        </div>
    )
}

export default App;