import { Request, Response } from 'express';
import * as documentoService from '../services/documento.service';
import { ResponseModel } from '../shared/response-model';

export const listarDocumentosPorCodPedido = async (req: Request, res: Response) => {
    try {
        const { codPedido } = req.params;
        const response = await documentoService.listarDocumentosPorCodPedido(codPedido);
        res.json(ResponseModel.success(response));
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}