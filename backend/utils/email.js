// HANDLES ALL THE MAIL FUNCTIONALITY ACCROSS THE APPLICATION
const nodemailer = require('nodemailer')
const ejs = require('ejs')
require('dotenv').config()

// EMAIL CLASS TO CREATE MULTIPLE EMAILS
module.exports = class Email {
    constructor(user, url) {
        this.to = user.email;
        this.name = user.firstName + ' ' + user.lastName;
        this.url = url;
        this.from = process.env.EMAIL_FROM
    }
    newTransport(){
        if (process.env.NODE_ENV === "production"){
            // USE an email service api
        }else{
            // we're using mailtrap for now
            return nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD 
                },
            });
        }
    }

    // SENDING THE ACTUAL MAIL
    async send(template, subject) {
        //1. RENDER HTML BASED BODY
        let html;
        ejs.renderFile(
          `${__dirname}/../views/emails/${template}.ejs`,
          {
            name: this.name,
            url: this.url,
            subject,
          },
          function (err, data) {
            html = data;
          }
        );
    
        //2. DEFINE MAIL OPTIONS
        const mailOptions = {
          from: this.from,
          to: this.to,
          subject,
          html,
          // text: htmlToText.fromString(html, {
          //   ignoreImage: true,
          //   tables: true,
          //   wordwrap: false,
          // }),
        };

        // 3. Create a transport and send email
        await this.newTransport().sendMail(mailOptions)
    }    

    // EXTEND THE MAIL FUNCTION AND SEND MAIL WELCOMING NEW USERS.
    async sendWelcome(){
        await this.send('WelcomeMail', 'Welcome and thanks for joining our platform')
    }
    // EXTEND THE MAIL FUNCTION AND SEND MAIL FOR SENDING PASSWORD RESET
    async sendPasswordReset(){
        await this.send(
            'resetPassword',
            'Your password reset token(valid for only 10 minutes)'
        )
    }
    // EXTEND THE MAIL FUNCTION AND SEND MAIL FOR VERIFICATION OF PASSWORD RESET
    async sendVerifiedPR(){
        await this.send(
            'verifiedPR',
            'Your password has successfully been reset'
        )
    }
    // EXTEND THE MAIL FUNCTION AND SEND MAIL FOR DELETING ACCOUNT.
    async sendDeletion() {
        await this.send('requestAccountDeletion', 'Delete your account')
    }

    // DELETE CONFIRMATION MAIL
    async sendDeletionConfirmation() {
        await this.send('confirmDeletion', 'Account Deletion')
    }

    // ACCOUNT REACTIVATION MAIL
    async sendConfirmActivation() {
        await this.send('confirmActivation', 'Account Reactivation')
    }
}