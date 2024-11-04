import { Request, Response } from 'express';
import { ResponseModel } from '../shared/response-model';
import * as clienteService from '../services/cliente.service';

export const obtenerClientePorNumeroDocumento = async (req: Request, res: Response) => {
    try {
        const { numeroDocumento } = req.params;
        const cliente = await clienteService.obtenerClientePorNumeroDocumento(numeroDocumento);
        res.json(ResponseModel.success(cliente));
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}