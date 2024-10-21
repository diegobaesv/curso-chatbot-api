import express from "express";
import { insertarConversacion } from "../controllers/conversacion.controller";

const router = express.Router();

router.post('/',insertarConversacion);

export default router;
