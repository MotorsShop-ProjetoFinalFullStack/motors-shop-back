import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

enum FuelType {
  Gasolina = "Gasolina",
  Alcool = "Álcool",
  Flex = "Flex",
  Diesel = "Diesel",
  Eletrico = "Elétrico",
}

@Entity("announcement")
class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  brand: string;

  @Column({ length: 10 })
  model: string;

  @Column({ type: "date" })
  year: string;

  @Column({ type: "enum", enum: FuelType })
  fuel: string;

  @Column({ type: "int" })
  km: number;

  @Column({ length: 30 })
  color: string;

  @Column({ type: "int" })
  fipePrice: number;

  @Column({ type: "int" })
  price: number;

  @Column({ type: "text" })
  description: string;

  @Column({ length: 255 })
  image: string;
}

export { Announcement };
