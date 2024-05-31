import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, TransactionModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
