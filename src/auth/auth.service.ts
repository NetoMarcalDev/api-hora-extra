/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosRepository } from './repositories/usuario.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsuariosRepository)
        private usuariosRepository: UsuariosRepository
    ) {}
}
