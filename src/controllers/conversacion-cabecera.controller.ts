import { Request, Response } from "express";
import * as conversacionCabeceraService from "../services/conversacion-cabecera.service";
import { ConversacionCabeceraResponse } from "../payload/responses/conversacion-cabecera.response";
import { ResponseModel } from "../shared/response-model";

export const obtenerUltimaConversacionCabecera = async (request: Request, response: Response) => {
    try {
        const { telefono } = request.params;
        let conversacionCabecera: ConversacionCabeceraResponse = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
        if(!conversacionCabecera) {
            await conversacionCabeceraService.insertarConversacionCabecera(telefono, '20241020223915');
            conversacionCabecera = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
        }
        response.json(ResponseModel.success(conversacionCabecera));
    } catch (error) {
        response.status(500).json(ResponseModel.error(error.message));
    }
}
