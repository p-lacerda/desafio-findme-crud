import express, { Request, Response } from 'express';
import { colaboradorController as Colaborador  } from '../controllers';

export const router = express.Router({
  strict: true
});

router.post('/', (req: Request, res: Response) => {
  Colaborador.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  Colaborador.getAll(req, res);
});

router.patch('/:id', (req: Request, res: Response) => {
  Colaborador.update(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  Colaborador.delete(req, res);
});