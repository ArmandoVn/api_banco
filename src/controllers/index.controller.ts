import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';

export const getUsers = async (req: Request, res: Response) => {
    const response: QueryResult = await pool.query('SELECT * FROM cliente');
    console.log(response.rows);
    res.send('CLIENTES');
}