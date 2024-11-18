import { Request, Response } from 'express';
import { ResponseModel } from '../shared/response-model';
import * as utilitarioService from '../services/utilitario.service';

export const actualizarConversacionesAbandonadas = async (req: Request, res: Response) => {
    try {
        const response =  await utilitarioService.actualizarConversacionesAbandonadas();
        res.json(ResponseModel.success(null,response)); 
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}