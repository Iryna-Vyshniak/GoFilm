const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '28194821-49041d995ecd04735d9e20d11';

const getImages = (searchText, page = 1) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(
        `Oops... there are no ${searchText} images matching your search... `
      )
    );
  });
};

const api = {
  getImages,
};

export default api;
