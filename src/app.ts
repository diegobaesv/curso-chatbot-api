import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import conversacionRoute from "./routes/conversacion.route";
import conversacionCabeceraRoute from "./routes/conversacion-cabecera.route"
import clienteRoute from "./routes/cliente.route";
import pedidoRoute from "./routes/pedido.route";
import utilitarioRoute from "./routes/utilitario.route";
import documentoRoute from "./routes/documento.route";

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/conversaciones', conversacionRoute);
app.use('/api/v1/conversacion-cabeceras', conversacionCabeceraRoute);
app.use('/api/v1/clientes', clienteRoute);
app.use('/api/v1/pedidos', pedidoRoute);
app.use('/api/v1/utilitarios', utilitarioRoute);
app.use('/api/v1/documentos', documentoRoute);

export default app;