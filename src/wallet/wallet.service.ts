import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        @InjectRepository(Transaction) private readonly transactionsRepository: Repository<Transaction>,
        private readonly entityManager: EntityManager,
      ) {}


  async credit(email: string, amount: number): Promise<void> {
    await this.entityManager.transaction( async (entityManager) => {
      const user = await this.usersRepository.findOne({where: { email }});

      const new_amount = Math.abs(Number(amount));
      const wallet_balance = Number(user.balance);
      user.balance = wallet_balance + new_amount;
      
      await entityManager.save(user);

      const transaction = new Transaction();
      transaction.user = user;
      transaction.type = 'credit';
      transaction.amount = amount;
      await entityManager.save(transaction);
    })
  }

  async debit(email: string, amount: number): Promise<void> {
    await this.entityManager.transaction( async (entityManager) => {
      const user = await this.usersRepository.findOne({where: { email }});

      const new_amount = Math.abs(Number(amount));
      const wallet_balance = Number(user.balance);
      if (wallet_balance < amount){
        throw new Error('Insufficient balance');
      }
      user.balance = wallet_balance - new_amount;      
      await entityManager.save(user);

      const transaction = new Transaction();
      transaction.user = user;
      transaction.type = 'debit';
      transaction.amount = amount;
      await entityManager.save(transaction);
    })
  }
}
