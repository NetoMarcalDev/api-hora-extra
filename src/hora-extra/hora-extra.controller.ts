/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { HoraExtraService } from './hora-extra.service';
import { CreateHoraExtraDto } from './dto/create-hora-extra.dto';
import { HoraExtra } from './entities/hora-extra.entity';

@Controller('hora-extra')
export class HoraExtraController {
    constructor(
        private horaExtraService: HoraExtraService
    ){}

    @Post()
    createHoraExtra(@Body() createHoraExtraDto: CreateHoraExtraDto): Promise<HoraExtra> {
        return this.horaExtraService.createHoraExtra(createHoraExtraDto);
    }

}
