import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { type } from "os";
import { PadroesEntradaEntity } from "./padroesEntrada.entity";

@Entity({ name: 'disj_entrada' })

export class DisjuntorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    decricao: string;

    @Column({ nullable: false })
    demanda: string;

    @Column({ type : "double", nullable: false })
    amper: number;

    @ManyToOne(type => PadroesEntradaEntity, PadroesEntradaEntity => PadroesEntradaEntity.id)
    cod_padrao: PadroesEntradaEntity;

}