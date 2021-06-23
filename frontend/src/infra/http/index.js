// eslint-disable-next-line no-unused-vars
export default async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((responseServer) => {
    console.log(responseServer);
    if (responseServer.ok) {
      return responseServer.json();
    }

    return responseServer;
  });
}
