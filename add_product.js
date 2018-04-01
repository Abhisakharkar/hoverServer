"use strict";

const Magento2 = require('node-magento2');

//instantiate the client object
const options = {
  authentication: {
    integration: {
      access_token: 'wr9gv8ryx3ennpu6ed3nfsk3jj8epd3n'
    }
  }
}




const mageClient = new Magento2('http://localhost/magento', options)
//basic usage
mageClient.init()
mageClient.post('/V1/products', {

    "product": {
      "id": 0,
      "sku": "74987498",
      "name": "pulsar",
      "attribute_set_id": 9,
      "price": 50000.00,
      "status": 1,
      "type_id": "simple",
      "weight": 1
        }
}) //Create a new product
  .then(product => {
    //the created product object
  })
