const API = 'http://swapi.dev/api';
const fetchData = require('../fecthData');

class People {
  data;
  newStructure;

  constructor() {}

  async getData() {
    try {
      let dataFilms = await fetchData(`${API}/people`);
      this.data = dataFilms;
      this.createNewStucture(this.data);
      this.newStucture = await this.createNewStucture(this.data);
      return this.newStucture;
    } catch (error) {
      console.error(error.message);
    }
  }

  async createNewStucture(data) {
    let people = await data.results;
    let peopleData = people.map((people) => {
      return {
        name: people.name,
        gender: people.gender,
        hair: people.hair_color,
        skin: people.skin_color,
        eye: people.eye_color,
        height: people.height,
        homeworld: people.homeworld,
      };
    });
    return peopleData;
  }
}

module.exports = People;
