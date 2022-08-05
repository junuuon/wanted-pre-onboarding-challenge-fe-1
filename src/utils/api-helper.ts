export const fetchJSON = (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  token: string,
  data?: {},
) =>
  fetch(process.env.REACT_APP_API_URL + url, {
    method,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  }).then(async (res) => {
    let response = null;
    if (res.headers.get('content-length')) {
      response = await res.json();
    }

    if (!res.ok) {
      return Promise.reject(new Error(response.details || 'Unknown Error'));
    }
    return response;
  });
