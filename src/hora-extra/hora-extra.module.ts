import { Module } from '@nestjs/common';
import { HoraExtraController } from './hora-extra.controller';
import { HoraExtraService } from './hora-extra.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoraExtraRepository } from './repositories/hora-extra.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([HoraExtraRepository]), AuthModule],
  controllers: [HoraExtraController],
  providers: [HoraExtraService],
})
export class HoraExtraModule {}
