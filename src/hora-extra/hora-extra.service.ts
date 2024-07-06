/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HoraExtraRepository } from './repositories/hora-extra.repository';
import { CreateHoraExtraDto } from './dto/create-hora-extra.dto';
import { HoraExtra } from './entities/hora-extra.entity';
import { GetHoraExtraFiltroDto } from './dto/get-hora-extra-filtro.dto';

@Injectable()
export class HoraExtraService {
    constructor(
        @InjectRepository(HoraExtraRepository)
        private horaExtraRepository: HoraExtraRepository,
    ){}

    createHoraExtra(createHoraExtraDto: CreateHoraExtraDto): Promise<HoraExtra> {
        return this.horaExtraRepository.createHoraExtra(createHoraExtraDto);
    }

    getHoraExtra(getHoraExtraFiltroDto: GetHoraExtraFiltroDto): Promise<HoraExtra[]> {
        return this.horaExtraRepository.getHoraExtra(getHoraExtraFiltroDto);
    }
    
}
