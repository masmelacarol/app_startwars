const API = 'http://swapi.dev/api';
const fetchData = require('../fecthData');

class StartShips {
  data;
  newStucture;
  constructor(data) {
    this.data = data;
  }

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

  async createNewStucture(data) {
    let ships = await data.results;
    let startsthips = ships.map((ship) => {
      return {
        name: ship.name,
        model: ship.model,
        manufacturer: ship.manufacturer,
        passengers: ship.passengers,
      };
    });
    return startsthips;
  }
}

module.exports = StartShips;
