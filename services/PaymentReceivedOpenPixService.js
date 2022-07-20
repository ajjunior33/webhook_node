const axios = require('axios');
async function PaymentReceivedOpenPixService(data) {
  const url = ""
  return axios.post(url, data);

}

module.exports = PaymentReceivedOpenPixService;