import { Pool } from 'pg';

// Pool es un objeto que permite hacer las consultas a la base de datos
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123',
    database: 'banco',
    port: 5432
});