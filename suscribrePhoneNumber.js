
import { SNSClient} from "@aws-sdk/client-sns";
// set the AWS Region
const REGION = "eu-west-3";

//Create SNS service object
const snsClient = new SNSClient({ region: REGION});
export {snsClient};



import {SubscribeCommand} from "@aws-sdk/client-sns";

//set the parameters

const  params = {
  Protocol: "sms",
  TopicArn: "arn:aws:sns:eu-west-3:343160866219:testeur", 
  Endpoint: "+33622514320",
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
