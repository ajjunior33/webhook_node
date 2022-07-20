const axios = require('axios');
async function PaymentReceivedOpenPixService(data) {
  const url = `${process.env.API_URL}/payments/openpix/received`
  return axios.post(url, data);

}

module.exports = PaymentReceivedOpenPixService;