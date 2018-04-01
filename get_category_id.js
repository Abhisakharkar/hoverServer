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
mageClient.get('/V1/categories/list', {searchCriteria: {currentPage:'1'}}) //Get a list of all products
.then(products => {
    //do something with the returned product data
    console.log(products);
  })
