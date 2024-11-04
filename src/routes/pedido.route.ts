import express from 'express';
import { listarPedidosFiltro } from '../controllers/pedido.controller';

const router = express.Router();

router.get('/filtro', listarPedidosFiltro);

export default router;
