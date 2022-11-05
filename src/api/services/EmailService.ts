import EmailTemplateService from '../../helpers/email/EmailTemplateService';

class UsuarioService {
    
    async send(data: any){
        let preenchido = await this.validar(data)
        if(preenchido){
            var retorno: any = EmailTemplateService.novaPesquisa(data);
        }else{
            var retorno: any = "Campos ausentes"
        }        
        
        return retorno
    }

    async validar(data: any){
        return true
        if(!data.valorProduto || data.valorProduto == ''|| data.valorProduto== "") return false
        if(!data.notobookEmMaos || data.notobookEmMaos == ''|| data.notobookEmMaos== "") return false
        if(!data.modelo || data.modelo == ''|| data.modelo== "") return false
        if(!data.anoFabricacao || data.anoFabricacao == ''|| data.anoFabricacao== "") return false
        if(!data.dataCompra || data.dataCompra == ''|| data.dataCompra== "") return false
        if(!data.nome || data.nome == ''|| data.nome== "") return false
        if(!data.dataNascimento || data.dataNascimento == ''|| data.dataNascimento== "") return false
        if(!data.rg || data.rg == ''|| data.rg== "") return false
        if(!data.email || data.email == ''|| data.email== "") return false
        if(!data.celular || data.celular == ''|| data.celular== "") return false
        if(!data.cep || data.cep == ''|| data.cep== "") return false
        if(!data.endereco || data.endereco == ''|| data.endereco== "") return false
        if(!data.numeroCasa || data.numeroCasa == ''|| data.numeroCasa== "") return false
        if(!data.cidade || data.cidade == ''|| data.cidade== "") return false
        if(!data.uf || data.uf == ''|| data.uf== "") return false
        if(!data.cpf || data.cpf == ''|| data.cpf== "") return false
        if(!data.termos || data.termos == ''|| data.termos== "") return false

        return true
    }

}

export default new UsuarioService();