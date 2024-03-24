export function getPhotos(inputValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '42985160-4d9b5f931f1b68b881db47de1',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(response.status);
    }
    return res.json();
  });
}
