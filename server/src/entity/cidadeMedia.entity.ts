import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";

@Entity({ name: 'cidade_media' })

export class cidadeMediaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type : "double", nullable: false })
    media: number;

    @Column({ type : "double", nullable: false })
    codCidade: number;

}