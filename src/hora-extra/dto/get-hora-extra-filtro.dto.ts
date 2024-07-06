/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class GetHoraExtraFiltroDto {
    @IsOptional()
    @IsString()
    search?: string;
}