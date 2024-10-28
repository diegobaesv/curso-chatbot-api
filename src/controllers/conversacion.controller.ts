import { Request, Response } from "express"
import * as conversacionService from "../services/conversacion.service"
import { ResponseModel } from "../shared/response-model";

export const insertarConversacion = async (req: Request, res: Response) => {
    try {
        console.log('conversacionController::insertarConversacion');
        const body = req.body;
        const response =  await conversacionService.insertarConversacion(body);
        res.json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
