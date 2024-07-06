/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from '../entities/user.entity';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Usuario)
export class UsuariosRepository extends Repository<Usuario> {
    async criarUsuario(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        
        const { descricao, senha } = authCredentialsDto;
        const usuario = this.create({ descricao, senha});
        
        try {
            await this.save(usuario);    
        } catch (error) {
           if(error.code === '23505') {
            throw new ConflictException('Usuário já existe.')
           } else {
            throw new InternalServerErrorException();
           }
        }
    }
}
