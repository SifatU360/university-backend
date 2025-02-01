import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express()
const port = 3000

//parsers
app.use(express.json());
app.use(cors());

//application
app.use('/students', StudentRoutes);

app.get('/', (req: Request, res:Response) => {
  res.send('Hello World!')
})

export default app;

