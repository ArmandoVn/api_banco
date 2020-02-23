import { Router } from 'express'
import { getUsers } from '../controllers/index.controller'

const router = Router();

router.get('/clientes', getUsers);
// router.get('/clientes/:id', getUsers);
// router.post('/clientes', getUsers);
// router.put('/clientes/:id', getUsers);
// router.delete('/clientes/:id', getUsers);

export default router;