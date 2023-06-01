import {Router} from 'express';

import {productController} from "../controllers";


const router = Router();


router.use('/', productController.getAll);

export const productRouter = router;