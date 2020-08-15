import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";

@Entity({ name: 'tipo_instalacao' })

export class TipoInstalacaoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    descricao: string;

}