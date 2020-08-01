import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";

@Entity({ name: 'modulo' })

export class ModuloEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    modelo: string;

    @Column({ nullable: false })
    descricao: string;

    @Column({ type : "double", nullable: false })
    potencia: number;

    @Column({ type : "double", nullable: false })
    area: number;

    @Column({ type : "double", nullable: false })
    eficiencia: number

    @Column({ type : "double", nullable: false })
    peso: number;

    @Column({ type : "double", nullable: false })
    garantia1: number;

    @Column({ nullable: false })
    garantia2: number;

}