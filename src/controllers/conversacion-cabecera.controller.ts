import { Request, Response } from "express";
import * as conversacionCabeceraService from "../services/conversacion-cabecera.service";

export const obtenerUltimaConversacionCabecera = async (request: Request, response: Response) => {
    try {
        const { telefono } = request.params;
        const result = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
        response.json({success: true, data: result, message: 'OK'});
    } catch (error) {
        response.json({success: false, data: null, message: error});
    }
}
