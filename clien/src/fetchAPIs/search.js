export function searchDataApi(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3001/search?textSearch=${data.textSearch}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => resolve(response.json()))
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
