/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn  } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    idusuario: number;

    @Column()
    descricao: string;

    @Column()
    senha: string;

}