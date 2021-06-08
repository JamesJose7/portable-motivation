import http from './httpService';

const url =
  'https://portable-motivation-functions.jamesjose.repl.co/motivation';

export const getMotivationQuote = () => {
  var config = {
    headers: { 'Access-Control-Allow-Origin': '*' },
    crossdomain: true,
  };

  return http.get(url, config);
};
