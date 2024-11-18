import { Router } from 'express';
import { listarDocumentosPorCodPedido } from '../controllers/documento.controller';

const router = Router();

router.get('/pedido/:codPedido', listarDocumentosPorCodPedido);

export default router;
