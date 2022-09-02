import EmailService from "./EmailService"

export default {    
  
    async novaPesquisa(replaces: any){

        const mail = new EmailService()
        const template = mail.template("novaPesquisa.html", replaces)
        const subject = "Navo cotação"

        return await mail.send({
            to: {
                email: "switchsip@yahoo.com"//"marlem@todayseguros.com.br"
            },
            message: {
                subject: subject,
                body: String(template)
            }
        })
        
    }  

}