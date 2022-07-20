const axios = require('axios');
async function PaymentReceivedOpenPixService(data) {

  return axios.post(url, data);

}

module.exports = PaymentReceivedOpenPixService;