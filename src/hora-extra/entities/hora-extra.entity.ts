/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/auth/entities/user.entity';
import { Exclude } from 'class-transformer';
@Entity()
export class HoraExtra {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descricao: string;

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

    @ManyToOne((type) => Usuario, (usuario) => usuario.horaExtra, { eager: false })
    @Exclude({ toPlainOnly: true })
    usuario: Usuario;

}