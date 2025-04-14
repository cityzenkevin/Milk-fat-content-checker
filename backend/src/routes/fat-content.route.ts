import express from 'express';

import { milkFatController } from '../controllers';

const router = express.Router();

router.get('/fatContent', milkFatController.getCOntents);

export default router;
