import * as nodemailer from 'nodemailer';
import { Config } from '../../config/config';
import path from "path";
import fs from "fs";
import { IEmailDTO, IEmailService } from '../../types/IEmail';

class EmailService implements IEmailService{

    async send({to, message, bcc}: IEmailDTO){
        try {
            console.log("Enviar para "+to.email)
            
            const transporter = nodemailer.createTransport({
                host: Config.mailHost,
                port: Number(Config.mailPort),
                secure: false,
                auth: {
                    user: Config.mailUser,
                    pass: Config.mailPassword
                },
                tls: {rejectUnauthorized: false}
            }) 
            await transporter.sendMail({
                from: Config.mailUser,
                to: to.email,
                subject: message.subject,
                text: message.body.replace(/(<([^>]+)>)/ig, ""),
                html: message.body                
            })          
            return true

        } catch(error: any) {
            console.error("MAIL ERROR => ", error)
            throw {erros: error.message}
        }
    }

    template(filename:string, replaces:any):string | boolean{
        try {

            let pathname = path.resolve(__dirname, `templates/${filename}`)
            let html = fs.readFileSync(pathname, "utf8")

            for(const [key, value] of Object.entries(replaces) ) {
                html = html.split(`{{${key}}}`).join(String(value))
            }
            return html

        } catch(error) {
            return false
        }
    }

}

export default EmailService;


