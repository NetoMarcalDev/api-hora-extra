/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HoraExtraRepository } from './repositories/hora-extra.repository';

@Injectable()
export class HoraExtraService {
    constructor(
        @InjectRepository(HoraExtraRepository)
        private horaExtraRepository: HoraExtraRepository,
    ){}

    
}
