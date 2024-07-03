import { Module } from '@nestjs/common';
import { HoraExtraController } from './hora-extra.controller';
import { HoraExtraService } from './hora-extra.service';

@Module({
  controllers: [HoraExtraController],
  providers: [HoraExtraService]
})
export class HoraExtraModule {}
