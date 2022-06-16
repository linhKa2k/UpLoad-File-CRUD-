export function deleteDataApi(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3001/${data}`;
    fetch(url, {
      method: "DELETE",
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
