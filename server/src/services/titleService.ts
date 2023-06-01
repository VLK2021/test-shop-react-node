import {ITitle} from "../entity";
import {titleRepository} from "../repositories";


class TitleService {
    public async getTitle(): Promise<ITitle[]> {
        return titleRepository.getTitles();
    }
}

export const titleService = new TitleService();