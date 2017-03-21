'use strict';

// invoked when hello route is hit
module.exports.hello = (event, context, callback) => {

  if(event) {
    var routeUrl = 'https://'+event.headers.Host+'/'+event.requestContext.stage+'/index';
  }
  else{
    var routeUrl = 'https://1f1hrv88cd.execute-api.us-east-1.amazonaws.com/dev/index'
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      url: routeUrl,
      input: event, // to display event object
      context: context // to get info about context object
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
