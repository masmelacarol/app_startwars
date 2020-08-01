const fetch = require('node-fetch');

const fetchData = async (api_url) => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = fetchData;
