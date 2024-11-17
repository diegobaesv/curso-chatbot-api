import pool from "../config/db";
import { RESPONSE_ACTUALIZADO_OK } from "../shared/constants";

export const listarPedidosFiltro = async (idCliente: number, estado: string) => {
    const rows: any[] = (await pool.query(`SELECT id_pedido, id_cliente, cod_pedido, 
        direccion, latitud, longitud, estado, fecha_emision, 
        fecha_curso, fecha_entrega, estado_auditoria, fecha_creacion_auditoria
	    FROM public.pedidos 
        WHERE id_cliente = $1 AND estado = $2 AND estado_auditoria = '1'
        ORDER BY cod_pedido ASC`, [idCliente, estado])).rows;
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

export const actualizarPedidoByCodPedido = async (codPedido: string, data: any) => {
    const querySet = [];
    const variables = [];
    let direccion = '';
    if(data.latitud){
        variables.push(data.latitud);
        querySet.push(`latitud = $${variables.length}`);
    }
    if(data.longitud){
        variables.push(data.longitud);
        querySet.push(`longitud = $${variables.length}`);
    }

    if(data.latitud && data.longitud){
        direccion = 'Calle falsa 12345 por calcular'
        variables.push(direccion);
        querySet.push(`direccion = $${variables.length}`);
    }

    variables.push(codPedido);
    await pool.query( `UPDATE pedidos SET ${querySet.join(', ')} WHERE cod_pedido = $${variables.length}`, variables );
    return {
        direccion
    };
}