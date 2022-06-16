export function updataDataApi(data) {
  return new Promise((resolve, reject) => {
    const url = "http://localhost:3001/update";
    fetch(url, {
      method: "PUT",
      body: data,
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
