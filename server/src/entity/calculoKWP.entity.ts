import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { PadroesEntradaEntity } from "./padroesEntrada.entity";

@Entity({ name: "calculo_kwp" })
export class CalculoKWPEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "double", nullable: false })
  POTEN1: number;

  @Column({ type: "double", nullable: false })
  POTEN2: number;

  @Column({ nullable: false })
  TELHADO: number;

  @Column({ nullable: false })
  SOLO: number;

  @ManyToOne(
    (type) => PadroesEntradaEntity,
    (PadroesEntradaEntity) => PadroesEntradaEntity.id
  )
  cod_padrao: PadroesEntradaEntity;
}
