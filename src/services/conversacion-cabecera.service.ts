import pool from "../config/db"
import { ConversacionCabeceraResponse } from "../payload/responses/conversacion-cabecera.response";
import { RESPONSE_INSERT_OK } from "../shared/constants";

export const obtenerUltimaConversacionCabecera = async (telefono: string): Promise<ConversacionCabeceraResponse> => {
    console.log('conversacionService::obtenerUltimaConversacionCabecera');
    const result = (await pool.query(`select cc.id_conversacion_cabecera , cc.id_cliente, cc.telefono, cc.hash, cc.cod_pedido, c.id_estado ultimo_estado
                    from bot_conversacion_cabeceras cc
                    left join bot_conversaciones c on c.id_conversacion_cabecera = cc.id_conversacion_cabecera
                    where cc.telefono = $1 AND cc.estado_flujo = 'C'
                    order by cc.fecha_creacion_auditoria desc, c.fecha_creacion_auditoria desc
                    limit 1`, [telefono])).rows;
    if(result.length == 0){
        return null;
    }
    return { 
        idConversacionCabecera: result[0].id_conversacion_cabecera,
        idCliente: result[0].id_cliente,
        hash: result[0].hash,
        telefono: result[0].telefono,
        codPedido: result[0].cod_pedido,
        ultimoEstado: result[0].ultimo_estado,
    };
}

export const insertarConversacionCabecera = async (telefono: string, hash: string, idCliente: number) => {
    console.log('conversacionService::insertarConversacionCabecera');
    await pool.query(
        'INSERT INTO bot_conversacion_cabeceras (telefono, hash, id_cliente) VALUES ($1, $2, $3)',
        [telefono, hash, idCliente ]
    );
    return RESPONSE_INSERT_OK;
}