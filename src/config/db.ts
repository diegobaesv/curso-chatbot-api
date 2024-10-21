import { Pool } from "pg";

const pool: Pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ENVIOSDEVPOOL',
    password: 'root',
    port: 5432
});

pool.on('error', (err, client)=>{
    console.log('Un error inesperado ha ocurrido en la BD', err);
});

export default pool;