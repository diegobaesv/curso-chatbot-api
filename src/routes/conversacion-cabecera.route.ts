import express from "express";
import { actualizarConversacionCabecera, obtenerUltimaConversacionCabecera } from "../controllers/conversacion-cabecera.controller";

const router = express.Router();

router.get('/ultima/:telefono',obtenerUltimaConversacionCabecera);
router.put('/:idConversacionCabecera',actualizarConversacionCabecera);

export default router;
