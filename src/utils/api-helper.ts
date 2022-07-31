export const fetchJSON = (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  token?: string,
  data?: {},
) =>
  new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_API_URL + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data ? JSON.stringify(data) : null,
    })
      .then(async (res) => {
        let response = null;
        if (res.headers.get('content-length')) {
          response = await res.json();
        }
        if (res.ok) {
          resolve(response);
        } else {
          reject(new Error(response.details || 'Unknown Error'));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
