import * as express from 'express';
import * as cors from 'cors';
import { clienteRouter, colaboradorRouter, ordensRouter } from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(accessControl);
    this.app.use('/cliente', clienteRouter);
    this.app.use('/colaborador', colaboradorRouter);
    this.app.use('/ordens', ordensRouter);
  }


  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  }

}

export { App };