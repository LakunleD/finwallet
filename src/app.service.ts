import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { Transaction } from './transaction/entities/transaction.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
