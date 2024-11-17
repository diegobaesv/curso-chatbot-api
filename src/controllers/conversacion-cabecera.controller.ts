import { Request, Response } from "express";
import * as conversacionCabeceraService from "../services/conversacion-cabecera.service";
import * as clienteService from "../services/cliente.service";
import { ConversacionCabeceraResponse } from "../payload/responses/conversacion-cabecera.response";
import { ResponseModel } from "../shared/response-model";

export const obtenerUltimaConversacionCabecera = async (req: Request, res: Response) => {
    try {
        const { telefono } = req.params;
        let conversacionCabecera: ConversacionCabeceraResponse = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
        if(!conversacionCabecera || conversacionCabecera.ultimoEstado == 1) {
            const cliente = await clienteService.obtenerClientePorTelefono(telefono);
            await conversacionCabeceraService.insertarConversacionCabecera(telefono, '20241020223915', cliente ? cliente.idCliente: null);
            conversacionCabecera = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
            if(!conversacionCabecera.ultimoEstado){
                conversacionCabecera.ultimoEstado = 1;
            }
        }
        res.json(ResponseModel.success(conversacionCabecera));
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const actualizarConversacionCabecera = async (req: Request, res: Response) => {
    try {
        const { idConversacionCabecera } = req.params;
        const response = await conversacionCabeceraService.actualizarConversacionCabecera(Number(idConversacionCabecera), req.body);
        res.json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
