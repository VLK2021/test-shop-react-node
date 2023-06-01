import {ITitle} from '../../entity';


export interface ITitleRepositoryInterface {
    getTitles(): Promise<ITitle[]>;
}





