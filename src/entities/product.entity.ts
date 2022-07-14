import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  minimum_quantity: number;

  @Column()
  discount_rate: number;
}
