'use strict';

const request=require('request');

// called when index route is hit
module.exports.index = (event, context, callback) => {
  // to test the get call in nodejs
  request.get('https://www-dev.uat-thesun.co.uk/wp-json/wp/v2/posts',null,function(err,res,body){
      
      if(err) 
        //to handle when there is an error
        callback(null, err)

      if(event) {
        var routeUrl = 'https://'+event.headers.Host+'/'+event.requestContext.stage+'/hello';
      }
      else{
        var routeUrl = 'https://1f1hrv88cd.execute-api.us-east-1.amazonaws.com/dev/hello'
      }

      if(res.statusCode !== 200 )
        // To parse data when rest call succeeds 
        var data = JSON.parse(res.body);
        var rendered = {
          statusCode: 200,
          body: JSON.stringify({
            code: data.code,
            message: data.message,
            data: data.data,
            url: routeUrl,
          }),
        };
        callback(null, rendered)
  });
};

// called internally when test route is hit
let hello = (event) => {
  
  // when name is passed as query param
  if (event.pathParameters && event.pathParameters.name)
    return 'Hello! '+ event.pathParameters.name;
  else
    return 'Hello! world';
};

// called when test route is hit
module.exports.test = (event, context, callback) => {

    if(event) {
        var routeUrl = 'https://'+event.headers.Host+'/'+event.requestContext.stage+'/hello';
    }
    else{
      var routeUrl = 'https://1f1hrv88cd.execute-api.us-east-1.amazonaws.com/dev/hello'
    }

   const response = {
    statusCode: 200,
    body: JSON.stringify({
      test: hello(event),
      Status: 'ok',
      match: 'IndVsAus',
      url: routeUrl,
    }),
  };

  callback(null, response)
};
