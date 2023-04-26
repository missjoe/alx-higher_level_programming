#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const charactersUrls = JSON.parse(body).characters;
    const charactersNames = [];

    function getCharacterName(characterUrl) {
      request(characterUrl, function (error, response, body) {
        if (error) {
          console.log(error);
        } else {
          charactersNames.push(JSON.parse(body).name);
          if (charactersNames.length === charactersUrls.length) {
            // All character names have been retrieved
            console.log(charactersNames.join('\n'));
          }
        }
      });
    }

    for (let i = 0; i < charactersUrls.length; i++) {
      getCharacterName(charactersUrls[i]);
    }
  }
});
