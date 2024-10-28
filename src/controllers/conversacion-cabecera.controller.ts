import { Request, Response } from "express";
import * as conversacionCabeceraService from "../services/conversacion-cabecera.service";
import * as clienteService from "../services/cliente.service";
import { ConversacionCabeceraResponse } from "../payload/responses/conversacion-cabecera.response";
import { ResponseModel } from "../shared/response-model";

export const obtenerUltimaConversacionCabecera = async (request: Request, response: Response) => {
    try {
        const { telefono } = request.params;
        let conversacionCabecera: ConversacionCabeceraResponse = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
        if(!conversacionCabecera) {
            const cliente = await clienteService.obtenerClientePorTelefono(telefono);
            await conversacionCabeceraService.insertarConversacionCabecera(telefono, '20241020223915', cliente ? cliente.idCliente: null);
            conversacionCabecera = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
            if(!conversacionCabecera.ultimoEstado){
                conversacionCabecera.ultimoEstado = 1;
            }
        }
        response.json(ResponseModel.success(conversacionCabecera));
    } catch (error) {
        console.error(error);
        response.status(500).json(ResponseModel.error(error.message));
    }
}
