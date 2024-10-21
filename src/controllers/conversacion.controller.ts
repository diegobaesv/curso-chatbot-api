import { Request, Response } from "express"
import * as conversacionService from "../services/conversacion.service"

export const insertarConversacion = (request: Request, response: Response) => {
    console.log('conversacionController::insertarConversacion');
    const body = request.body;
    conversacionService.insertarConversacion(body);
    response.json({success: true, data: null});
}
