/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateHoraExtraDto {
    @IsNotEmpty()
    usuario: string;

    @IsNotEmpty()
    estabelecimento: string;

    @IsNotEmpty()
    solicitante: string;

    @IsNotEmpty()
    data: Date;
    
    @IsNotEmpty()
    inicio: string;

    @IsNotEmpty()
    fim: string;
    
    @IsNotEmpty()
    total: string;

    @IsNotEmpty()
    dia_semana: string;
} 