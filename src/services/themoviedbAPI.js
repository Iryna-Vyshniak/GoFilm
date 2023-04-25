import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
};

export const getPopularMovies = async (page = 1) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};
export const getTopRatedMovies = async () => {
  try {
    const { data } = await axios.get(`/movie/top_rated`, {
      params: {
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

export const getMoviesByQuery = async (query, page = 1) => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: {
        query,
        page,
        include_adult: false,
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie with that name');
  }
};

export const getMoviesDetailsById = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, {
      params: {
        id: movieId,
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie with that name');
  }
};

export const getMoviesCast = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        id: movieId,
        language: 'en-US',
      },
    });
    return data.cast;
  } catch (error) {
    throw new Error('Oops, there is no cast movie');
  }
};

export const getMoviesReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        id: movieId,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    throw new Error('Oops, we don`t have any reviews');
  }
};

export const getVideosMovies = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/videos`, {
      params: {
        id: movieId,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    throw new Error('Oops, there is no movie`s videos');
  }
};

export const getGenresMovies = async () => {
  try {
    const { data } = await axios.get(`genre/movie/list`);
    return data.genres;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
export const getActorsPopular = async () => {
  try {
    const { data } = await axios.get(`person/popular`);
    return data.results;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
