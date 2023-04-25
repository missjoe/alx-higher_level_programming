#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

// Make API call to get films data
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error making API call:', error);
    return;
  }

  // Parse JSON response
  const data = JSON.parse(body);

  // Filter films where Wedge Antilles is present
  const numFilmsWithWedge = data.results.filter(film => {
    const wedgeInFilm = film.characters.find(characterUrl => characterUrl.includes('/18/'));
    return wedgeInFilm !== undefined;
  }).length;

  console.log(numFilmsWithWedge);
});
