export const getData = (url) => {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    })
}