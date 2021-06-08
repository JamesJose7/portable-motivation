import http from './httpService';

const url = 'https://www.affirmations.dev/';

export const getMotivationQuote = () => {
  var config = {
    headers: { 'Access-Control-Allow-Origin': '*' },
    crossdomain: true,
  };
  return http.get(url, config);
};
