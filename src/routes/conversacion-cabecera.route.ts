import express from "express";
import { obtenerUltimaConversacionCabecera } from "../controllers/conversacion-cabecera.controller";

const router = express.Router();

router.get('/ultima/:telefono',obtenerUltimaConversacionCabecera);

export default router;
