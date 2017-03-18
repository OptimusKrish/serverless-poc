// to check the functions locally before deploying

const request=require('request');

request.get('https://www-dev.uat-thesun.co.uk/wp-json/wp/v2/posts',null,function(err,res,body){
    if(err) //TODO: handle err
    console.log('error');
    if(res.statusCode !== 200 ) //etc
    //TODO Do something with response
    var response = JSON.parse(res.body);
    var rendered = {
    statusCode: 200,
    body: {
      code: response.code,
      msg: response.message,
      data: response.data
    }
  };
    console.log(rendered);
    //console.log(response.body.code,res.body.message)
  });
