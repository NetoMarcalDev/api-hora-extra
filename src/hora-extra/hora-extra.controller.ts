/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { HoraExtraService } from './hora-extra.service';
import { CreateHoraExtraDto } from './dto/create-hora-extra.dto';
import { HoraExtra } from './entities/hora-extra.entity';
import { GetHoraExtraFiltroDto } from './dto/get-hora-extra-filtro.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Usuario } from 'src/auth/entities/user.entity';

@UseGuards(AuthGuard())
@Controller('hora-extra')
export class HoraExtraController {
    constructor(
        private horaExtraService: HoraExtraService
    ){}

    @Post()
    createHoraExtra(
      @Body()createHoraExtraDto: CreateHoraExtraDto,
      @GetUser() usuario: Usuario
    ): Promise<HoraExtra> {
        return this.horaExtraService.createHoraExtra(createHoraExtraDto, usuario);
    }

    @Get()
    getHoraExtra(
      @Query() filtroDto: GetHoraExtraFiltroDto,
      @GetUser() usuario: Usuario,
    ): Promise<HoraExtra[]> {
      return this.horaExtraService.getHoraExtra(filtroDto, usuario);
    }  

}
