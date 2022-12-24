// services/api.js
import axios from 'axios';

const key = '30575180-f51bf292afceb69c3d087b7fc';
const params = 'per_page=12&orientation=horizontal&image_type=photo&';

export const fetchImagesWithQuery = async (search, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${key}&q=${search}&${params}&page=${page}`
  );
  return response.data.hits;
};
