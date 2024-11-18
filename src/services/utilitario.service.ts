import pool from "../config/db"
import { RESPONSE_ACTUALIZADO_OK } from "../shared/constants";

export const actualizarConversacionesAbandonadas = async () => {
    console.log('conversacionService::actualizarConversacionesAbandonadas');
    await pool.query(`
        UPDATE bot_conversacion_cabeceras 
            SET estado_flujo = 'A'
            WHERE id_conversacion_cabecera IN (
                SELECT id_conversacion_cabecera FROM (		
                    SELECT x.*,
                        (CURRENT_TIMESTAMP - fecha_ultimo_mensaje) diferencia ,
                        (EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - fecha_ultimo_mensaje)::interval)/60 ) diferencia2
                    FROM (
                        SELECT cc.*, (
                                SELECT fecha_creacion_auditoria
                                FROM bot_conversaciones 
                                WHERE id_conversacion_cabecera = cc.id_conversacion_cabecera 
                                ORDER BY fecha_creacion_auditoria DESC
                                LIMIT 1
                            ) fecha_ultimo_mensaje
                        FROM bot_conversacion_cabeceras cc
                        WHERE estado_flujo = 'C' and estado_auditoria = '1'
                    ) AS x 
                ) as y
                WHERE diferencia2 > 5
            )
        `);
    return RESPONSE_ACTUALIZADO_OK;
}