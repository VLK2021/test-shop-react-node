import {Column, Entity} from "typeorm";

import {CommonFields} from "./commonFields";


export interface ITitle {
    id: number;
    name: string;
}

@Entity('titles', {database: 'eliftech'})
export class Title extends CommonFields implements ITitle{
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    name: string;

}