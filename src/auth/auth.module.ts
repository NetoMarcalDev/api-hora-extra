import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosRepository } from './repositories/usuario.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosRepository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
