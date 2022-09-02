import EmailTemplateService from '../../helpers/email/EmailTemplateService';

class UsuarioService {
    
    async send(data: any){

        let retorno = EmailTemplateService.novaPesquisa(data);
        
        return retorno
    }

}

export default new UsuarioService();