import { Request, Response } from "express"
import * as conversacionService from "../services/conversacion.service"

export const insertarConversacion = async (request: Request, response: Response) => {
    try {
        console.log('conversacionController::insertarConversacion');
        const body = request.body;
        await conversacionService.insertarConversacion(body);
        response.json({success: true, data: null});
    } catch (error) {
        response.json({success: false, data: null, message: error});
    }
    
}
