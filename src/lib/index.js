// var mailgun = require("mailgun-js")
// import mailgun from 'mailgun-js'
// https://api:key-0720e90820d91b543d01e5c84989d583@api.mailgun.net/v3/sandbox7fe163bd9a5b494c93fc6bdef403637f.mailgun.org
// const API_KEY = 'key-0720e90820d91b543d01e5c84989d583'
// const DOMAIN = 'sandbox7fe163bd9a5b494c93fc6bdef403637f.mailgun.org'
// var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN})

export const sendmail = {
  ad: 'test123',
  terra () {
    console.log('Allo Terra')
  },
  data: {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'kbellioum@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  },
  mysend () {
    // mailgun({apiKey: API_KEY, domain: DOMAIN})
    // mailgun.messages().send(this.data, (error, body) => {
    //   if (error) {
    //     console.log(error)
    //   } else {
    //     console.log(body)
    //   }
    // })
  }

}
