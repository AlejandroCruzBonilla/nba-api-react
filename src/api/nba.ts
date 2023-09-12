export const requestApi = <T>(endpoint = '', params = ''): Promise<T> => {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://api-nba-v1.p.rapidapi.com';

    const url = baseUrl + endpoint + params;

    fetch(url, {
      headers: {
        'X-RapidAPI-Key': '...',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      },
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};
