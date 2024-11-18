import express from "express";
import { actualizarConversacionesAbandonadas } from "../controllers/utilitario.controller";

const router = express.Router();

router.get('/actualizar-conversaciones-abandonadas', actualizarConversacionesAbandonadas);

export default router;
