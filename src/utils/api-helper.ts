import { AuthResponse } from '@usertypes/auth';

export const fetchAuth = (url: string, data: {}) =>
  new Promise<AuthResponse>((resolve, reject) =>
    fetch(process.env.REACT_APP_API_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      }),
  );
