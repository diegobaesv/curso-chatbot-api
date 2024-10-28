import { Request, Response } from "express";
import * as conversacionCabeceraService from "../services/conversacion-cabecera.service";

export const obtenerUltimaConversacionCabecera = async (request: Request, response: Response) => {
    try {
        const { telefono } = request.params;
        let result: any[] = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
        if(result.length == 0) {
            await conversacionCabeceraService.insertarConversacionCabecera(telefono, '20241020223915');
            result = await conversacionCabeceraService.obtenerUltimaConversacionCabecera(telefono);
        }
        response.json({success: true, data: result[0], message: 'OK'});
    } catch (error) {
        response.json({success: false, data: null, message: error});
    }
}
