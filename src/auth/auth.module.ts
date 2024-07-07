/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosRepository } from './repositories/usuario.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: '@LG10sty7',
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([UsuariosRepository]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
