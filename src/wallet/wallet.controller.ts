import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/transaction/dto/create-transaction.dto';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {

  constructor(private readonly walletService: WalletService) {}

  @Post('credit')
  async credit(@Body() transactionDto: CreateTransactionDto) {
    const { email, amount } = transactionDto;
    await this.walletService.credit(email, amount);
    return { message: 'Amount credited successfully' };
  }

  @Post('debit')
  async debit(@Body() transactionDto: CreateTransactionDto) {
    const { email, amount } = transactionDto;
    await this.walletService.debit(email, amount);
    return { message: 'Amount debited successfully' };
  }
}
