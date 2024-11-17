import express from 'express';
import { actualizarPedidoByCodPedido, listarPedidosFiltro } from '../controllers/pedido.controller';

const router = express.Router();

router.get('/filtro', listarPedidosFiltro);
router.put('/cod-pedido/:codPedido', actualizarPedidoByCodPedido);

export default router;
