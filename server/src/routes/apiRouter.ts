import {Router} from "express";

import {titleRouter} from "./titleRouter";
import {productRouter} from "./productRouter";


const router = Router();

router.use('/titles', titleRouter);
router.use('/products', productRouter);


export const apiRouter = router;


