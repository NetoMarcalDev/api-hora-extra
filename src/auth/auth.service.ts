/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosRepository } from './repositories/usuario.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsuariosRepository)
        private usuariosRepository: UsuariosRepository
    ) {}

    async cadastroUsuario(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.usuariosRepository.criarUsuario(authCredentialsDto);
    }
    
}
