import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service'
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Transaction])],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
