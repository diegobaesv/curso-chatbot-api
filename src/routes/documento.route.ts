import { Router } from 'express';
import { listarDocumentosPorPedido } from '../controllers/documento.controller';

const router = Router();

router.get('/pedido/:idPedido', listarDocumentosPorPedido);

export default router;
