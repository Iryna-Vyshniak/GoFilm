import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '80849c20aa63241eb028c4e7b7d0f3a8',
  include_adult: false
};

export const getPopularMovies = async (page = 1, lng) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
        language: lng
      }
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};
export const getTopRatedMovies = async lng => {
  try {
    const { data } = await axios.get('/movie/top_rated', {
      params: {
        language: lng
      }
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

export const getMoviesByQuery = async (page = 1, query = '', lng) => {
  try {
    const urlParam = query
      ? `/search/movie?page=${page}&query=${query}&language=${lng}`
      : `/movie/upcoming?page=${page}&language=${lng}`;
    const { data } = await axios.get(urlParam);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getMoviesDetailsById = async (movieId, lng) => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, {
      params: {
        id: movieId,
        language: lng
      }
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie with that name');
  }
};

export const getMoviesCast = async (movieId, lng) => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        id: movieId,
        language: lng
      }
    });
    return data.cast;
  } catch (error) {
    throw new Error('Oops, there is no cast movie');
  }
};

export const getMoviesReviews = async (movieId, lng) => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        id: movieId,
        language: lng
      }
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
        id: movieId
      }
    });
    return data.results;
  } catch (error) {
    throw new Error('Oops, there is no movie`s videos');
  }
};

export const getGenresMovies = async lng => {
  try {
    const { data } = await axios.get('genre/movie/list', {
      params: {
        language: lng
      }
    });
    return data.genres;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getMoviesWithGenres = async (movieId, lng) => {
  try {
    const { data } = await axios.get(
      `/discover/movie?with_genres=${movieId}&sort_by=popularity.desc&page=1&language=${lng}`
    );
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getActorsPopular = async lng => {
  try {
    const { data } = await axios.get('person/popular', {
      params: {
        language: lng
      }
    });
    return data.results;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getActorDetailInfo = async (movieId, lng) => {
  try {
    const { data } = await axios.get(`/person/${movieId}`, {
      params: {
        id: movieId,
        language: lng
      }
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getActors = async (page = 1, query = '', lng) => {
  try {
    const urlParam = query
      ? `/search/person?page=${page}&query=${query}&language=${lng}`
      : `/person/popular?page=${page}&language=${lng}`;
    const { data } = await axios.get(urlParam);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getMoviesbyActors = async (personId, lng) => {
  try {
    const { data } = await axios.get(`/person/${personId}/movie_credits`, {
      params: {
        page: 1,
        language: lng
      }
    });
    return data.cast;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getNowPlayingMovies = async lng => {
  try {
    const { data } = await axios.get('/movie/now_playing', {
      params: {
        page: 1,
        language: lng
      }
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
