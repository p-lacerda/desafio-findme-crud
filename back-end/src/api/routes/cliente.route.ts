import express, { Request, Response } from 'express';
import { clienteController  } from '../controllers';

export const router = express.Router({
  strict: true
});

router.post('/', (req: Request, res: Response) => {
  clienteController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  clienteController.getAll(req, res);
});

router.patch('/', (req: Request, res: Response) => {
  clienteController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  clienteController.delete(req, res);
});