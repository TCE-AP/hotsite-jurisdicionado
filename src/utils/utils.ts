const API_URL = process.env['NEXT_PUBLIC_API_URL'];

const fetchApi = (path: string) => {
  const url = API_URL + (
    path.startsWith('/')
      ? path
      : '/' + path
  );

  return fetch(url);
};

export const Utils = {
    fetchApi,
};
