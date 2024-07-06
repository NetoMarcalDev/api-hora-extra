/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from '../entities/user.entity';

@EntityRepository(Usuario)
export class UsuariosRepository extends Repository<Usuario> {
    
}
