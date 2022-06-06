export function addDataApi(data) {
  console.log();
    return new Promise((resolve, reject) => {
      const url = "http://localhost:3001/upload";
      fetch(url, {
        method: "POST",
        body: data
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
  