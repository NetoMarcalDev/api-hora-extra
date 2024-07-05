/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { HoraExtraService } from './hora-extra.service';

@Controller('hora-extra')
export class HoraExtraController {
    constructor(
        private horaExtraService: HoraExtraService
    ){}
}
