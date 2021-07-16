export default class SwapiService {
    _baseUrl = "https://swapi.dev/api";

    async getResource(url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch url ${url}, error code: ${res.status}`);
        }

        return await res.json();
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

    getStarship = (id) => {
        return this.getResource(`/starships/${id}/`)
    }

    getAllStarships = async () => {
        const res = await this.getResource("/starships/")
        return res.results;
    }

    _extractId (string){
        const idRegExp = /\/([0-9]*)\/$/;
        return string.match(idRegExp)[1];
    }

    _transformPerson = (person) => {
        return{
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
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
}
