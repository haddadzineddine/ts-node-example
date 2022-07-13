import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  category: number;

  @Column()
  minimum_quantity: number;

  @Column()
  discount_rate: Date;
}
