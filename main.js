'use strict';
import { KEY_BASKETBALL } from './api.js';

(() => {
  
  const endpoint = '/standings?league=12&season=2022-2023';

  
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v1.basketball.api-sports.io',
      'x-rapidapi-key': KEY_BASKETBALL,
    },
  };

  
  fetch(`https://v1.basketball.api-sports.io${endpoint}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      

      const teams = data.response[0].league.standings[0].table;
      buildStandingList(teams);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });

  const buildStandingList = (teams) => {
    const sectionElement = document.createElement('section');

    teams.forEach((team) => {
      const teamElement = document.createElement('div');
      teamElement.textContent = `Team Name: ${team.team.name}`;
      sectionElement.appendChild(teamElement);
    });

    document.body.appendChild(sectionElement);

    
  }

  const tracker =  (the) => {
    const gif = (the, gif) => {
      const gif = res.data[0].images.original.url
      const img = document.createElement('img')
      img.src = gif;
      gif.appendChild(img)
    }
  }
  
})();
