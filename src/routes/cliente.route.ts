// cliente route
import { Router } from 'express';
import { actualizarTelefonoCliente, obtenerClientePorNumeroDocumento } from '../controllers/cliente.controller';

const router = Router();

router.get('/numero-documento/:numeroDocumento', obtenerClientePorNumeroDocumento);
router.put('/actualizar-telefono', actualizarTelefonoCliente);

export default router;