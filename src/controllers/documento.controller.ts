import { Request, Response } from 'express';
import * as documentoService from '../services/documento.service';
import { ResponseModel } from '../shared/response-model';

export const listarDocumentosPorPedido = async (req: Request, res: Response) => {
    try {
        const { idPedido } = req.params;
        const response = await documentoService.listarDocumentosPorPedido(Number(idPedido));
        res.json(ResponseModel.success(response));
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}