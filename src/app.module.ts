import { Module } from '@nestjs/common';
import { HoraExtraModule } from './hora-extra/hora-extra.module';

@Module({
  imports: [HoraExtraModule],
})
export class AppModule {}
