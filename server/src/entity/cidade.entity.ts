import { Entity, Column, PrimaryGeneratedColumn, Tree } from "typeorm";

@Entity({ name: "cidade" })
export class CidadesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: true })
  cep: string;

  @Column({ type : "double", nullable: false })
  JAN: number;

  @Column({ type : "double", nullable: false })
  FEB: number;

  @Column({ type : "double", nullable: false })
  MAR: number;

  @Column({ type : "double", nullable: false })
  ABR: number;

  @Column({ type : "double", nullable: false })
  MAI: number;

  @Column({ type : "double", nullable: false })
  JUN: number;

  @Column({ type : "double", nullable: false })
  JUL: number;

  @Column({ type : "double", nullable: false })
  AGO: number;

  @Column({ type : "double", nullable: false })
  SET: number;

  @Column({ type : "double", nullable: false })
  OUT: number;

  @Column({ type : "double", nullable: false })
  NOV: number;

  @Column({ type : "double", nullable: false })
  DEZ: number;

  @Column({ nullable: true })
  media: number;

  @Column({ type : "double", nullable: false })
  distancia: number;
}
