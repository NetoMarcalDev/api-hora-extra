/* eslint-disable prettier/prettier */
import { Body, Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HoraExtraRepository } from './repositories/hora-extra.repository';
import { CreateHoraExtraDto } from './dto/create-hora-extra.dto';
import { HoraExtra } from './entities/hora-extra.entity';
import { GetHoraExtraFiltroDto } from './dto/get-hora-extra-filtro.dto';
import { Usuario } from 'src/auth/entities/user.entity';
import { UpdateHoraExtraDto } from './dto/update-hora-extra.dto';

@Injectable()
export class HoraExtraService {
    constructor(
        @InjectRepository(HoraExtraRepository)
        private horaExtraRepository: HoraExtraRepository,
    ){}

    async createHoraExtra(
        @Body() createHoraExtraDto: CreateHoraExtraDto,
        usuario: Usuario,
    ): Promise<HoraExtra> {
        return this.horaExtraRepository.createHoraExtra(createHoraExtraDto, usuario);
    }

    async getHoraExtra(
        getHoraExtraFiltroDto: GetHoraExtraFiltroDto,
        usuario: Usuario,
    ): Promise<HoraExtra[]> {
        return this.horaExtraRepository.getHoraExtra(getHoraExtraFiltroDto, usuario);
    }

    async getHoraExtraById(
        id: string, 
        usuario: Usuario,
    ): Promise<HoraExtra> {
        const found = await this.horaExtraRepository.findOne({ where: { id, usuario } });
    
        if (!found) {
          throw new NotFoundException(`Hora extra de Id: ${id}, não encontrada.`);
        }
        return found;
    }

    async updateHoraExtra(
        id: string,
        horaExtra: UpdateHoraExtraDto,
        usuario: Usuario
    ): Promise<HoraExtra> {
        const dados = await this.getHoraExtraById(id, usuario);
        dados.descricao = horaExtra.descricao;
        dados.estabelecimento = horaExtra.estabelecimento;

        await this.horaExtraRepository.save(dados);
        return dados;
    }
      
}
