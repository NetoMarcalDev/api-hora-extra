import { Module } from '@nestjs/common';
import { HoraExtraModule } from './hora-extra/hora-extra.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HoraExtraModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'horaExtra',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
