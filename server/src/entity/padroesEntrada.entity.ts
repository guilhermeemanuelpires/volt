import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { DisjuntorEntity } from "./disjEntrada.entity";
import { CalculoKWPEntity } from "./calculoKWP.entity";

@Entity({ name: 'padroes_entrada' })

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

    @OneToMany(type => DisjuntorEntity,  DisjuntorEntity => DisjuntorEntity.cod_padrao)
    DisjuntorEntity: DisjuntorEntity[];

    @OneToMany(type => CalculoKWPEntity,  CalculoKWPEntity => CalculoKWPEntity.cod_padrao)
    CalculoKWPEntity: CalculoKWPEntity[];

}