import {Router} from 'express';
import {titleController} from "../controllers";


const router = Router();

router.get('/', titleController.getAll);


export const titleRouter = router;





