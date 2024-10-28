import pool from "../config/db";
import { ClienteResponse } from "../payload/responses/cliente.response";

export const obtenerClientePorTelefono = async (telefono: string): Promise<ClienteResponse> => {
    console.log('obtenerClientePorTelefono');
    const result = (await pool.query(`select id_cliente, tipo_documento, numero_documento, nombres, apellido_paterno, apellido_materno, telefono, direccion,latitud,longitud 
                    from clientes where telefono = $1 and estado_auditoria = '1'
                    limit 1`, [telefono])).rows;
    if(result.length == 0){
        return null;
    }

    return { 
        idCliente: result[0].id_cliente,
        tipoDocumento: result[0].tipo_documento,
        numeroDocumento: result[0].numero_documento,
        apellidoPaterno: result[0].apellido_paterno,
        apellidoMaterno: result[0].apellido_materno,
        nombres: result[0].nombres,
        direccion: result[0].direccion,
        telefono: result[0].telefono,
        latitud: result[0].latitud,
        longitud: result[0].longitud,
    };
}

export const obtenerClientePorNumeroDocumento = async (numeroDocumento: string): Promise<ClienteResponse> => {
    console.log('obtenerClientePorNumeroDocumento');
    const result = (await pool.query(`select id_cliente, tipo_documento, numero_documento, nombres, apellido_paterno, apellido_materno, telefono, direccion,latitud,longitud 
                    from clientes where numero_documento = $1 and estado_auditoria = '1'
                    limit 1`, [numeroDocumento])).rows;
    if(result.length == 0){
        return null;
    }

    return { 
        idCliente: result[0].id_cliente,
        tipoDocumento: result[0].tipo_documento,
        numeroDocumento: result[0].numero_documento,
        apellidoPaterno: result[0].apellido_paterno,
        apellidoMaterno: result[0].apellido_materno,
        nombres: result[0].nombres,
        direccion: result[0].direccion,
        telefono: result[0].telefono,
        latitud: result[0].latitud,
        longitud: result[0].longitud,
    };
}