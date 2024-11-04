import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import conversacionRoute from "./routes/conversacion.route";
import conversacionCabeceraRoute from "./routes/conversacion-cabecera.route"
import clienteRoute from "./routes/cliente.route";

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/conversaciones', conversacionRoute);
app.use('/api/v1/conversacion-cabeceras', conversacionCabeceraRoute);
app.use('/api/v1/clientes', clienteRoute);

export default app;