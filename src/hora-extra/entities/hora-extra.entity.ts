/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class HoraExtra {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    usuario: string;

    @Column()
    estabelecimento: string;

    @Column()
    solicitante: string;

    @Column()
    data: Date;
    
    @Column()
    inicio: string;

    @Column()
    fim: string;
    
    @Column()
    total: string;

    @Column()
    dia_semana: string;

}