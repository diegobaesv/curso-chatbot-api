// cliente route
import { Router } from 'express';
import { obtenerClientePorNumeroDocumento } from '../controllers/cliente.controller';

const router = Router();

router.get('/numero-documento/:numeroDocumento', obtenerClientePorNumeroDocumento);

export default router;