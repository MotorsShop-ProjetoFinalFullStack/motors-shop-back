import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entitie";
import { Comment } from "./comment.entity";

/*
enum FuelType {
  Gasolina = "Gasolina",
  Alcool = "Álcool",
  Flex = "Flex",
  Diesel = "Diesel",
  Eletrico = "Elétrico",
}
*/

@Entity("announcements")
class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  brand: string;

  @Column({ length: 10 })
  model: string;

  @Column({ type: "date" })
  year: string;

  @Column({ length: 50 })
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

  @ManyToOne(() => User, {onDelete:"CASCADE"})
  user: User

  @OneToMany(() => Comment, commentAnnouncement => commentAnnouncement.announcement)
  comments: Comment[]
}

export { Announcement };
