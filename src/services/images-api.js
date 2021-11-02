const KEY = '23292870-e9e1fc8f4fc8bd7151266ea82';
const BASE_URL = 'https://pixabay.com/api/'

async function fetchImages({ query, page }) {
  const respons = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  const parsedRespons = await respons.json();
  return parsedRespons;
}

export default fetchImages;
