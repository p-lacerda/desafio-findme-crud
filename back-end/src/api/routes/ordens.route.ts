import express, { Request, Response } from 'express';
import { ordensController as Ordens  } from '../controllers';

export const router = express.Router({
  strict: true
});

router.post('/', (req: Request, res: Response) => {
  Ordens.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  Ordens.getAll(req, res);
});

router.patch('/:id', (req: Request, res: Response) => {
  Ordens.update(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  Ordens.delete(req, res);
});