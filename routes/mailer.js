var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* POST home page. */
router.post('/sendMail', function(req, res, next) {
    var body = req.body.Body

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'luatnodejs@gmail.com',
            pass: 'LUATvidai27@'
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"Luat Nguyen Nodejs" <luatnodejs@gmail.com>', // sender address
        to: 'Luat Nguyen <congluat27@gmail.com>', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };
// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(false);
            return console.log(error);
        }
        res.send(true);
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

});

module.exports = router;
