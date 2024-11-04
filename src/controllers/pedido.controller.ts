import { Request, Response } from 'express';
import { ResponseModel } from '../shared/response-model';
import * as pedidoService from '../services/pedido.service';

export const listarPedidosFiltro =  async (req: Request, res: Response) => {
    try {
        const { idCliente, estado } = req.query;
        const response =  await pedidoService.listarPedidosFiltro(Number(idCliente), estado as string);
        res.json(ResponseModel.success(response));
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}