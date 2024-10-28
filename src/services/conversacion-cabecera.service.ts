import pool from "../config/db"

export const obtenerUltimaConversacionCabecera = async (telefono: string) => {
    console.log('conversacionService::obtenerUltimaConversacionCabecera');
    const result = await pool.query(`select cc.id_conversacion_cabecera , cc.id_cliente, cc.telefono, cc.hash, cc.cod_pedido, c.id_estado ultimo_estado
                    from bot_conversacion_cabeceras cc
                    left join bot_conversaciones c on c.id_conversacion_cabecera = cc.id_conversacion_cabecera
                    where cc.telefono = $1
                    order by cc.fecha_creacion_auditoria desc, c.fecha_creacion_auditoria desc
                    limit 1`, [telefono]);

    return result.rows;
}

export const insertarConversacionCabecera = async (telefono: string, hash: string) => {
    console.log('conversacionService::insertarConversacionCabecera');
    await pool.query(
        'INSERT INTO bot_conversacion_cabeceras (telefono, hash) VALUES ($1, $2)',
        [telefono, hash]
    );
}