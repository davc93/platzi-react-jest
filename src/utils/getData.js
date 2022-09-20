const getData = api => {
  return fetch(api)
    .then(response => {
      return response.json();
    })
    .then(response => response)
    .catch(error => error);
};

export default getData;
