import {EntityRepository, getManager, Repository} from "typeorm";

import {Title} from "../../entity";
import {ITitleRepositoryInterface} from "./titleRepository.interface";


@EntityRepository(Title)
class TitleRepository extends Repository<Title> implements ITitleRepositoryInterface {
    public async getTitles() {
        return getManager().getRepository(Title).find();
    }
}

export const titleRepository = new TitleRepository();












