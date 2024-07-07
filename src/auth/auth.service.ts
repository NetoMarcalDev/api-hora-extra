/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosRepository } from './repositories/usuario.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsuariosRepository)
        private usuariosRepository: UsuariosRepository,
        private jwtService: JwtService,
    ) {}

    async cadastroUsuario(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.usuariosRepository.criarUsuario(authCredentialsDto);
    }

    async ecessar(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { descricao, senha } = authCredentialsDto;
        const usuario = await this.usuariosRepository.findOne({ descricao });
    
        if(usuario && (await bcrypt.compare(senha, usuario.senha))) {
          return 'success';
        } else {
          throw new UnauthorizedException('Usuário ou senha invalidos.');
        }    
      }
    
    
}
