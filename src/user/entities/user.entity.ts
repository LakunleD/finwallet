import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transaction } from "src/transaction/entities/transaction.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ unique: true })
  email: string;
  
  @Column('decimal', { precision: 10, scale: 2, default: 0.00 })
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  constructor(user: Partial<User>){
    Object.assign(this, user);
  }
}
