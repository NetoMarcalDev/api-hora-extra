/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from '../entities/user.entity';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(Usuario)
export class UsuariosRepository extends Repository<Usuario> {
    async criarUsuario(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        
        const { descricao, senha } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const usuario = this.create({ descricao, senha: hashedPassword });
        
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
