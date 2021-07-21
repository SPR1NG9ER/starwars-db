export default class SwapiService {
    _baseUrl = "https://swapi.dev/api";
    _baseImg = "https://starwars-visualguide.com/assets/img";

    async getResource(url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch url ${url}, error code: ${res.status}`);
        }

        return await res.json();
    }

    getPersonImage = (id) => {
        return `${this._baseImg}/characters/${id}.jpg`
    }

    getStarshipImage = (id) => {
        return `${this._baseImg}/starships/${id}.jpg`
    }

    getPlanetImage = (id) => {
        return `${this._baseImg}/planets/${id}.jpg`
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person)
    }

    getAllPeople = async () => {
        const res = await this.getResource("/people/")
        return res.results.map(this._transformPerson);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getAllPlanets = async () => {
        const res = await this.getResource("/planets/")
        return res.results.map(this._transformPlanet);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getAllStarships = async () => {
        const res = await this.getResource("/starships/")
        return res.results.map(this._transformStarship);
    }

    _extractId (string){
        const idRegExp = /\/([0-9]*)\/$/;
        return string.match(idRegExp)[1];
    }

    _transformPerson = (person) => {
        return{
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            id: this._extractId(person.url)
        }
    }


    _transformPlanet = (planet) => {
        return{
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            id: this._extractId(planet.url)
        }
    }

    _transformStarship = (starship) => {
        return {
            name: starship.name,
            model: starship.model,
            length: starship.length,
            cost: starship.cost_in_credits,
            id: this._extractId(starship.url)
        }
    }
}
