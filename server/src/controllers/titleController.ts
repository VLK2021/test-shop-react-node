import {Request, Response } from 'express';

import {ITitle} from "../entity";
import {titleService} from "../services";


class TitleController {
    public async getAll(req: Request, res: Response): Promise<Response<ITitle[]>> {
        const titles = await titleService.getTitle();
        return res.json(titles);
    }
}

export const titleController = new TitleController();