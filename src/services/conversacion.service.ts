import { Request } from "express";
import { InsertarConversacionRequest } from "../payload/requests/insertar-conversacion.request";
import pool from "../config/db"
import { RESPONSE_INSERT_OK } from "../shared/constants";

export const insertarConversacion = async (request: InsertarConversacionRequest): Promise<string> => {
    console.log('conversacionService::insertarConversacion');
    await pool.query(
        'INSERT INTO bot_conversaciones (id_conversacion_cabecera, id_estado, telefono, autor, mensaje) VALUES ($1, $2, $3, $4, $5)',
        [request.idConversacionCabecera, request.idEstado, request.telefono, request.autor, request.mensaje]
    );
    return RESPONSE_INSERT_OK;
}