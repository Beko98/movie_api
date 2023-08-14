const API_KEY = "04cdf8b4de6ca25fa7df7c1797b66113";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};
