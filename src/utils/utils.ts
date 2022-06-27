import https from 'https';

export const agent = new https.Agent({
  rejectUnauthorized: false
});

const API_URL = process.env['NEXT_PUBLIC_API_URL'];

const fetchApi = (path: string) => {
  const url = API_URL + (
    path.startsWith('/')
      ? path
      : '/' + path
  );

  const options = { agent } as RequestInit;
  return fetch(url, options);
};

function ip2long(ip: string) {
  if (ip.substring(0, 7) == "::ffff:") {
    ip = ip.substring(7);
  }

  if (ip.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {
    const parts = ip.split('.').map(part => parseInt(part));
    return (parts[0] * 16777216 +
      (parts[1] * 65536) +
      (parts[2] * 256) +
      (parts[3] * 1));
  }

  return parseInt(ip);
}

export const Utils = {
    fetchApi,
};
