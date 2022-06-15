const cron = require('node-cron');

const nodemailer = require("nodemailer");

const fs = require("fs");

const htmlbody = fs.readFileSync("index2.html", 'utf8');

const emailsJSON = fs.readFileSync("emails.json");
const arrayEmails = JSON.parse(emailsJSON).emails
const bcc = arrayEmails.join();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "korsakov.ua.dn@gmail.com",
        pass: "**** **** **** ****", // пароль для приложений google.com (https://support.google.com/mail/?p=InvalidSecondFactor )
    },
});

const textPlain = `Pupvote
                                    
                                    
                                    
                                    
                                
                            
                        
                    
                

                
                    
                        
                            Hey there,
                            
                            Maximilian!
                             
                            You have a new comment on
                             Tuzik\`s profile.
                        
                    
                

                
                    
                        
                        Daisy Jones
                        
                            United States
                        
                    
                

                
                    
                        
                            
                                
                                    
                                        
                                    
                                
                            
                        
                    
                

                
                    
                        
                    
                

                
                    
                    
                

                
                    
                        
                            We send this email when someone leave a comment on your pet. Feel free to
                            turn off emails at any time.
                        
                    
                

                
                    
                        
                            
                                
                                    
                                        
                                    
                                
                                
                                    
                                        
                                    
                                
                                
                                    
                                        
                                    
                                
                            
                        
                    
                

                
                    
                        
                            © 2021 pupvote.com`

// cron.schedule('* * * * *', () => {
//     console.log('send mail');
//     transporter.sendMail({
//         from: 'nodemailer_test', // sender address
//         to: "oleg.korsakov@abz.agency, oleg_korsakov_abz_agency@yahoo.com", // list of receivers
//         bcc: "oleg-korsakov-abz-agency@yandex.ua, oleg-korsakov-abz-agency@outlook.com",
//         subject: "test от Pupvote", // Subject line
//         text: "Привет!!!", // plain text body
//         html: htmlbody, // html body
//     });
// });

transporter.sendMail({
    from: 'nodemailer_test', // sender address
    // to: "oleg.korsakov@abz.agency, oleg_korsakov_abz_agency@yahoo.com", // list of receivers
    bcc: bcc,
    subject: "pdf to print", // Subject line
    // text: textPlain, // plain text body
    text: "pdf file at attachment", // plain text body
    // html: htmlbody, // html body
    attachments: [
        {   // filename and content type is derived from path
            path: './PDF/page.pdf'
        },
    ],
    list: {
        unsubscribe: {
            url: 'http://google.com',
            comment: 'If you want unsubscribe'
        },
    },
});