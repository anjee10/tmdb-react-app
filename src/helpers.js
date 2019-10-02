// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins} min`;
};

// Get the year from release date
export const getReleaseYear = releaseDate => {
  return releaseDate.split('-')[0];
};

export const fetchMovies = (endpoint, returnFunc = result => result) => {
  return fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      return returnFunc(result);
    })
    .catch(error => console.error('Error:', error));
};
