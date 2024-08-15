/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn  } from 'typeorm';
import { HoraExtra } from 'src/hora-extra/entities/hora-extra.entity';
@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    idusuario: number;

    @Column()
    descricao: string;

    @Column()
    senha: string;

    @OneToMany((type) => HoraExtra, (horaExtra) => horaExtra.usuario, { eager: true })
    horaExtra: HoraExtra[];
}