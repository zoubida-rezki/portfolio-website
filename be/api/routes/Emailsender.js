// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
import dotenv from 'dotenv';
import sendgrid from "@sendgrid/mail";

dotenv.config();
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.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)
const msg = {
  to: 'zoubidaziroki@example.com', // Change to your recipient
  from: 'zoubidaziroki@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail.send(msg).then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error) 
  })