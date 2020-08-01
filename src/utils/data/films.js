const API = 'http://swapi.dev/api';
const fetchData = require('../fecthData');

class Films {
  data;
  newStructure;

  constructor() {}

  async getData() {
    try {
      let dataFilms = await fetchData(`${API}/films`);
      this.data = dataFilms;
      this.createNewStucture(this.data);
      this.newStucture = await this.createNewStucture(this.data);
      return this.newStucture;
    } catch (error) {
      console.error(error.message);
    }
  }

  async createNewStucture(data) {
    let films = await data.results;
    let filmsData = films.map((film) => {
      return {
        name: film.title,
      };
    });
    return filmsData;
  }
}

module.exports = Films;
