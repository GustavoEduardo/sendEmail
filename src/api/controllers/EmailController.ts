import {  Request, Response } from 'express';
import ErrorReturn from '../../helpers/serviceDefault/errorReturn';
import SuccessReturn from '../../helpers/serviceDefault/successReturn';
import EmailService from '../services/EmailService';

class EmailController{

    async send(req:Request,res:Response){
        try {
            let data = req.body;
            let result = await EmailService.send(data);            
    
            let retorno: any = SuccessReturn({
                result,
                message: "Email enviado com sucesso"
            })
            
            res.status(retorno.code).json(retorno);

        }catch ( e: any ) {            
            let retorno: any = ErrorReturn({
                message: e.message,
                result: e.erros
            })
            return res.status(retorno.code).json(retorno);
        }
    }

}

export default new EmailController();