import EmailService from "./EmailService"

export default {    
  
    async novaPesquisa(replaces: any){
        console.log("Enviar email. Campos Recebidos:")
        console.log(replaces)
        const mail = new EmailService()
        const template = mail.template("novaPesquisa.html", replaces)
        const subject = "Nova Contratação - Notebook"

        return await mail.send({
            to: {
                email: "marlem@todayseguros.com.br"
            },
            message: {
                subject: subject,
                body: String(template)
            }
        })
        
    }  

}