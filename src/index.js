const StartShips = require('./utils/data/startships');
const Films = require('./utils/data/films');
const Planets = require('./utils/data/planets');
const People = require('./utils/data/people');

const runAPI = async () => {
  let films = await new Films().getData();
  let startShips = await new StartShips().getData();
  let planets = await new Planets().getData();
  let people = await new People().getData();

  if (films) {
    let newStructure = films.map((title) => {
      return {
        title: title.name,
        ...people,
        ...planets,
        ...startShips,
      };
    });
    console.log('getData -> newStructure', newStructure);
  }
};

runAPI();
