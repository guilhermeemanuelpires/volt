import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cidades' })

export class CidadesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    distancia: number;
}   