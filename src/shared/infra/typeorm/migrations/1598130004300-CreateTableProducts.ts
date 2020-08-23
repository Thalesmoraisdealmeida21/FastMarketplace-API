import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTableProducts1598130004300
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'color_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'size_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'category_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'quantity',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'pricePromotional',
            type: 'decimal',
            isNullable: true,
            precision: 10,
            scale: 2,
          },
          {
            name: 'DatePromoStart',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'DatePromoEnd',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
