import {Column} from "typeorm";

import {CommonFields} from "./commonFields";


export interface IProduct {
    id: number;
    name: string;
    information: string;
    price: number;
    shop: string;
    url: string;
}

export class Product extends CommonFields implements IProduct {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    information: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    price: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    shop: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    url: string;
}













