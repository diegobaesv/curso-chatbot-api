import pool from "../config/db";

export const listarPedidosFiltro = async (idCliente: number, estado: string) => {
    const rows: any[] = (await pool.query(`SELECT id_pedido, id_cliente, cod_pedido, 
        direccion, latitud, longitud, estado, fecha_emision, 
        fecha_curso, fecha_entrega, estado_auditoria, fecha_creacion_auditoria
	    FROM public.pedidos 
        WHERE id_cliente = $1 AND estado = $2 AND estado_auditoria = '1'`, [idCliente, estado])).rows;
    return rows.map((row)=> {
        return {
            idPedido: row.id_pedido,
            idCliente: row.id_cliente,
            codPedido: row.cod_pedido,
            direccion: row.direccion,
            latitud: row.latitud,
            longitud: row.longitud,
            estado: row.estado,
            fechaEmision: row.fecha_emision,
            fechaCurso: row.fecha_curso,
            fechaEntrega: row.fecha_entrega,
            estadoAuditoria: row.estado_auditoria,
            fechaCreacionAuditoria: row.fecha_creacion_auditoria
        }
    });

   
}