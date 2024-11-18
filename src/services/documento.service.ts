import pool from "../config/db"

export const listarDocumentosPorPedido = async (idPedido: number) => {
    const rows: any[] = (await pool.query(`SELECT id_documento, id_pedido, nombre, nombre_archivo, ruta_url, fecha_creacion_auditoria
        FROM public.documentos 
        WHERE id_pedido = $1`, [idPedido])).rows;
    return rows.map((row)=> {
        return {
            idDocumento: row.id_documento,
            idPedido: row.id_pedido,
            nombre: row.nombre,
            nombreArchivo: row.nombre_archivo,
            rutaUrl: row.ruta_url,
            fechaCreacionAuditoria: row.fecha_creacion_auditoria
        }
    });
}