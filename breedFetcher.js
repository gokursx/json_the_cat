
'use strict';

const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  fetchBreedDescription('Siberian', (error, description) =>  {
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
