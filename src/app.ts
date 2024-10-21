import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import conversacionRoute from "./routes/conversacion.route";

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));


app.use('/saludo',(request: Request, response: Response)=>{ 
    response.json({hola: 'hola1', chau: 'chau2'}); 
});
app.use('/api/v1/conversaciones', conversacionRoute)

export default app;