import { Request } from "express";
import { InsertarConversacionRequest } from "../payload/requests/insertar-conversacion.requests";

export const insertarConversacion = (request: InsertarConversacionRequest) => {
    console.log('conversacionService::insertarConversacion');
    
}