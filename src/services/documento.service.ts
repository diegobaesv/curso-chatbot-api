import pool from "../config/db"

export const listarDocumentosPorCodPedido = async (codPedido: string) => {
    const rows: any[] = (await pool.query(`
        SELECT d.id_documento, d.id_pedido, d.nombre, d.nombre_archivo, d.ruta_url, d.fecha_creacion_auditoria
        FROM documentos d
        INNER JOIN pedidos p ON p.id_pedido = d.id_pedido
        WHERE p.cod_pedido = $1`, [codPedido])).rows;
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