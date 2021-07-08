export default class SwapiService {
    _baseUrl = "https://swapi.dev/api";

    async getResource(url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch url ${url}, error code: ${res.status}`);
        }

        return await res.json();
    }

    getPerson(id){
        return this.getResource(`/people/${id}/`)
    }

    async getAllPeople(){
        const res = await this.getResource("/people/")
        return res.results;
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    async getAllPlanets(){
        const res = await this.getResource("/planets/")
        return res.results.map(this._transformPlanet);
    }

    getStarship(id){
        return this.getResource(`/starships/${id}/`)
    }

    async getAllStarships(){
        const res = await this.getResource("/starships/")
        return res.results;
    }

    _extractId (string){
        const idRegExp = /\/([0-9]*)\/$/;
        return string.match(idRegExp)[1];
    }

    _transformPlanet (planet){

        return{
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            id: this._extractId(planet.url)
        }
    }
}
