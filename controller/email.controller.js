import nodemailer from 'nodemailer';
function sendMail(email,password)
{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nidhijgupta27@gmail.com',
          pass: 'pcrazsevnwbzrqhe'
        }
      });
      
      var mailOptions = {
        from: 'nidhijgupta27@gmail.com',
        to: email,
        subject: 'Antique Shop mailer',
        html: '<h1>Welcome to Node Mailer</h1><p>This is verification mail by Antique Shop</p><h2>Username='+email+'<br> Password='+password+'</h2>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

export default sendMail;