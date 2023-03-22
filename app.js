/*const express = require('express');
const twilio = require('twilio');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

function sendSMS(){
  const client = new twilio(process.env.TWILIO_SID , Process.env.TwiLIO_AUTH_TOKEN,
    { lazyLoading: false}
    );


  return client.messages
  .create({body:'hey this is a message', from:'+33276863319', to: process.env.PHONE_NUMBER
  .then(message => {
    
    console.log(message, "Message sent")
    })

  .catch(err => {console.log(err, "Message NOT, sent")
  })

})

}


app.listen(5000, () => console.log('listening at port 5000'))
*/
/*const twilio = require('twilio');*/


/*const accountSid = 'Ac6b6b7950c3eab103ae6d6f7b39919af3';*/
/*const accountSid = 'AC092a59ca710a8de7e3a056acab2a23c8'
/*const authToken = '7ff5529789ec77bd29b0c4d1604f789';*/
/*const authToken = 'a1a0bb044c02693e7b5f00f79e170267';
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    twiml: '<Response><Say>Ahoy, World!</Say></Response>',
    /*from: '+13159037704',*/
    /*messagingServiceSid: 'MG8d02f668550db8fde4a29ed109381360',*/
   // to: '+33776093462',s
   // from: '+13159037704'
//})
    //.then(call => console.log(call.sid));
    
    /*const accountSid = 'AC092a59ca710a8de7e3a056acab2a23c8';
    const authToken = 'a1a0bb044c02693e7b5f00f79e170267';
    const client = require('twilio')(accountSid, authToken);

    client.calls
             .create({twiml: 'hi there', from: '+13159037704', to: '+33776093462'})
             .then(call => console.log(call.sid));*/



  const express = require('express');
  const AWS = require('aws-sdk');

  const app = express();

  app.use(express.json());
  // config aws 

  const creds = new AWS.SharedIniFileCredentials({profile: 'default'});
  const sns = new AWS.SNS({creds, region: 'eu-west-3'});

  //routes
  app.get('/status', (_req, res) => {
    res.send({status: 'ok', sns});
  });

  app.post('/suscribe', (_req, res) => {
    let params = {
      protocol: 'Sms',
      TopicArn: 'arn:aws:iam::343160866219:user/jeff',
      Endpoint: _req.body.email

    };
   sns.subscribe(params, (err, data) => {
     if (err) console.error(err)
     res.send(data)
    })
  })

  const port = 3000; 

  app.listen(port, ()  => {
      console.log("SNS app listening on port " + port);
  })

  
/*
  const express = require('express')

  const app = express()
  const port = 3000

  app.get('/', (_req,res) => res.send('hello, express !'))

  app.listen(port, () => console.log(`noter aplication sur: http://localhost:${port}`))

*/




   