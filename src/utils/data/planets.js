const API = 'http://swapi.dev/api';
const fetchData = require('../fecthData');
class Planets {
  data;
  newStructure;
  constructor() {}

  async getData() {
    try {
      let dataStartShips = await fetchData(`${API}/starships`);
      this.data = dataStartShips;
      this.newStucture = await this.createNewStucture(this.data);
      return this.newStucture;
    } catch (error) {
      console.error(error.message);
    }
  }

  async createNewStucture() {
    let planets = await this.data.results;
    let planetsData = planets.map((planet) => {
      return {
        name: planet.name,
        terrain: planet.terrain,
        gravity: planet.gravity,
        diameter: planet.diameter,
        population: planet.population,
      };
    });
    return planetsData;
  }
}

module.exports = Planets;
