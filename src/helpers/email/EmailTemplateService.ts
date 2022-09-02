import EmailService from "./EmailService"

export default {    
  
    async novaPesquisa(data: any){

        const mail = new EmailService()
        const template = mail.template("novaPesquisa.html", data.replaces)
        const subject = data.subject?data.subject:"Navo cotação"

        return await mail.send({
            to: {
                email: data.email?data.email:"marlem@todayseguros.com.br"
            },
            message: {
                subject: subject,
                body: String(template)
            }
        })
        
    }  

}