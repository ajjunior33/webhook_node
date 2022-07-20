const axios = require('axios');
async function PaymentReceivedOpenPixService(data) {
  const url = `${process.env.PORT}/payments/openpix/received`
  return axios.post(url, data);

}

module.exports = PaymentReceivedOpenPixService;