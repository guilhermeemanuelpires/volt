import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";

@Entity({ name: 'padroesEntrada' })

export class PadroesEntradaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    descricao: string;

    @Column({ type : "double", nullable: false })
    minimo: number;

    @Column({nullable: false })
    coluna1: number;

    @Column({ nullable: false })
    solo: number


}