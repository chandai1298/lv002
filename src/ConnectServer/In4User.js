const URL_NGROK = {
  url: 'http://192.168.1.80:1300',
};
const IN4_USER = {
  getUser: `${URL_NGROK.url}/checkLogin`,
  getData: `${URL_NGROK.url}/getData`,
};
export {IN4_USER, URL_NGROK};
