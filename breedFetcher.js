
'use strict';

const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, resp, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
      return;
    }

    try {
      const data = JSON.parse(body);
      const breed = data[0];
      
      if (breed) {
        callback(null, breed.description);
      } else {
        callback(`Failed to find breed ${breedName}`, null);
      }
    } catch (parseError) {
      callback(`Error parsing JSON: ${parseError}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
