import { Request } from "express";
import { InsertarConversacionRequest } from "../payload/requests/insertar-conversacion.request";
import pool from "../config/db"

export const insertarConversacion = async (request: InsertarConversacionRequest) => {
    console.log('conversacionService::insertarConversacion');
    const result = await pool.query(
        'INSERT INTO bot_conversaciones (id_conversacion_cabecera, id_estado, telefono, autor, mensaje) VALUES ($1, $2, $3, $4, $5)',
        [request.idConversacionCabecera, request.idEstado, request.telefono, request.autor, request.mensaje]
    );
}