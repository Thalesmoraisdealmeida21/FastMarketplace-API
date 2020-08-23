import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  color_id: string;

  @Column()
  size_id: string;

  @Column()
  category_id: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  pricePromotional: number;

  @Column()
  DatePromoStart: Date;

  @Column()
  DatePromoEnd: Date;

  @Column()
  description: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
