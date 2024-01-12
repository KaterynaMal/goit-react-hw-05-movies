import axios from 'axios';

const API_KEY = 'f0dfa7497e7951551870a1200c4b66ff';

const requestMovies = async (endpoint) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export { requestMovies };

// const { data } = await axios.get(
//     `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`
// );
//         return data;

// const BASE_URL = 'https://api.themoviedb.org/3';

// const END_POINT = {
//     trending: '/trending/get-trending',
//     search: '/search/search-movies ',
//     details: '/movies/get-movie-details',
//     credits: '/movies/get-movie-credits',
//     reviews: '/movies/get-movie-reviews',
// }
