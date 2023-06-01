import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableProducts1685632137340 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Products',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'name',
                    type: 'varchar',
                    width: 250,
                    isNullable: false
                },
                {
                    name: 'information',
                    type: 'varchar',
                    width: 250,
                    isNullable: false
                },
                {
                    name: 'price',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'shop',
                    type: 'varchar',
                    width: 250,
                    isNullable: false
                },
                {
                    name: 'url',
                    type: 'varchar',
                    width: 250,
                    isNullable: false
                },
                {
                    name: 'createdAT',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Products', true);
    }

}
