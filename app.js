
//Abonner une adresse mail à une rubrique
/*

import { SNSClient} from "@aws-sdk/client-sns";
// set the AWS Region
const REGION = "eu-west-3";

//Create SNS service object
const snsClient = new SNSClient({ region: REGION});
export {snsClient};



import {SubscribeCommand} from "@aws-sdk/client-sns";
//import {snsClient} from '/add.js';

//set the parameters

const  params = {
  Protocol: "email"
  TopicArn: "arn:aws:sns:eu-west-3:343160866219:testeur", 
  Endpoint: "Email_Address",
};

const run = async () => {
  try {
    const data = await snsClient.send(new SubscribeCommand(params));
    console.log("Success.", data);
    //return data; 
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();

*/
/*
//Publier dans une rubrique

import { SNSClient} from "@aws-sdk/client-sns";
// set the AWS Region
const REGION = "eu-west-3";

//Create SNS service object
const snsClient = new SNSClient({ region: REGION});
export {snsClient};



import {PublishCommand} from "@aws-sdk/client-sns";
//import {snsClient} from '/add.js';

//set the parameters

const  params = {
  Message: "Hello à tous, Bienvenue dans ma rubrique",
  TopicArn: "arn:aws:sns:eu-west-3:343160866219:testeur", 
};

const run = async () => {
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Success.", data);
    //return data; 
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
*/

//Configurer l'abonnement à une rubrique en utilisant une Interface Frontend


import { SNSClient} from "@aws-sdk/client-sns";
// set the AWS Region
const REGION = "eu-west-3";

//Create SNS service object
const snsClient = new SNSClient({ region: REGION});
export {snsClient};

import pkg from 'express';
const {express} = pkg;

const app = express;
const port = 3000;

app.use(express.json());

// Routes
app.get('/', (_req,res) => res.send('yes'))

app.listen(port, ()=> {
  console.log('Sns app listening on port ${port}');
})