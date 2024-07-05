/* eslint-disable prettier/prettier */
import { Repository, EntityRepository } from 'typeorm';
import { HoraExtra } from '../entities/hora-extra.entity';

@EntityRepository(HoraExtra)
export class HoraExtraRepository extends Repository<HoraExtra> {
    
}