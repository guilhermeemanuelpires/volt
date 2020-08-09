import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";

@Entity({ name: 'tarifas' })

export class TarifasEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type : "double", nullable: false })
    valor: number;

}