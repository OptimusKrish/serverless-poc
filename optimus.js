'use strict';

const request=require('request');

// called when index route is hit
module.exports.index = (event, context, callback) => {
request.get('https://www-dev.uat-thesun.co.uk/wp-json/wp/v2/posts',null,function(err,res,body){
    if(err) //TODO: handle err
    if(res.statusCode !== 200 ) //etc
    //TODO Do something with response
    var response = JSON.parse(res.body); 
  });

   const rendered = {
    statusCode: 200,
    body: JSON.stringify({
      code: response.code,
      msg: response.message,
      data: response.data
    }),
  };

  callback(null, rendered)
};

// called internally when test route is hit
let hello = () => {
  return 'Hello world';
};

// called when test route is hit
module.exports.test = (event, context, callback) => {

   const response = {
    statusCode: 200,
    body: JSON.stringify({
      test: hello(),
      Status: 'ok',
      match: 'IndVsAus'
    }),
  };

  callback(null, response)
};
