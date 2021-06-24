// eslint-disable-next-line no-unused-vars
export default async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
    },
    body: JSON.stringify(body),
    ...options,
  }).then((responseServer) => {
    if (responseServer.ok) {
      return responseServer.json();
    }

    return responseServer;
  });
}
