/* eslint-disable prettier/prettier */
import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HoraExtraRepository } from './repositories/hora-extra.repository';
import { CreateHoraExtraDto } from './dto/create-hora-extra.dto';
import { HoraExtra } from './entities/hora-extra.entity';
import { GetHoraExtraFiltroDto } from './dto/get-hora-extra-filtro.dto';
import { Usuario } from 'src/auth/entities/user.entity';

@Injectable()
export class HoraExtraService {
    constructor(
        @InjectRepository(HoraExtraRepository)
        private horaExtraRepository: HoraExtraRepository,
    ){}

    createHoraExtra(
        @Body() createHoraExtraDto: CreateHoraExtraDto,
        usuario: Usuario,
    ): Promise<HoraExtra> {
        return this.horaExtraRepository.createHoraExtra(createHoraExtraDto, usuario);
    }

    getHoraExtra(
        getHoraExtraFiltroDto: GetHoraExtraFiltroDto,
        usuario: Usuario,
    ): Promise<HoraExtra[]> {
        return this.horaExtraRepository.getHoraExtra(getHoraExtraFiltroDto, usuario);
    }
    
}
