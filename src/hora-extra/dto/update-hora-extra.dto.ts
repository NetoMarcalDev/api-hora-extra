/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class UpdateHoraExtraDto {
    @IsNotEmpty()
    descricao: string;

    @IsNotEmpty()
    estabelecimento: string;
}