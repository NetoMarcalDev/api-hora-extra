/* eslint-disable prettier/prettier */
import { Repository, EntityRepository } from 'typeorm';
import { HoraExtra } from '../entities/hora-extra.entity';
import { CreateHoraExtraDto } from '../dto/create-hora-extra.dto';
import { GetHoraExtraFiltroDto } from '../dto/get-hora-extra-filtro.dto';

@EntityRepository(HoraExtra)
export class HoraExtraRepository extends Repository<HoraExtra> {
    async createHoraExtra( createHoraExtraDto: CreateHoraExtraDto): Promise<HoraExtra> {
        const {
            usuario,         
            estabelecimento,
            solicitante,
            data,
            inicio,
            fim,
            total,
            dia_semana,
        } = createHoraExtraDto;

        const horaExtra = await this.create({
            usuario,         
            estabelecimento,
            solicitante,
            data,
            inicio,
            fim,
            total,
            dia_semana,
        });

        await this.save(horaExtra);
        return horaExtra;
    }

    async getHoraExtra(getHoraExtraFiltroDto: GetHoraExtraFiltroDto): Promise<HoraExtra[]> {
        const { search } = getHoraExtraFiltroDto;
        const query = this.createQueryBuilder('horaExtra');
        
        if (search) {
            query.andWhere(
              '(LOWER(horaExtra.usuario) LIKE LOWER(:search))',
              { search: `%${search}%` },
            );
          }
      
        const horaExtra = await query.getMany();
        return horaExtra;      
    }
}