'use strict';

const request = require('request');

fetchBreedDescription('Siberian', (error, description) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
      return;
    }

      if (breed) {
        callback(null, breed.description);
      } else {
        callback(`Failed to find breed ${breedName}`, null);
      }

    }
  });
};
