import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address.entitie";
import { Announcement } from "./announcement.entitie";

export enum TypeUser {
    CLIENT = "Comprador",
    SELLER = "Anunciante"
}

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type:"varchar", length: 50})
    name: string

    @Column({type:"varchar", length: 80, unique: true})
    email: string

    @Column({type:"varchar", length: 11, unique: true})
    cpf: string

    @Column({type:"varchar", length: 11})
    phone: string

    @Column({type: "date"})
    birthdate: string | Date

    @Column({type:"varchar", length:350 ,nullable:true})
    description?: string | null | undefined

    @Column({type:"enum", enum: TypeUser, default:TypeUser.CLIENT})
    typeUser: TypeUser | null | undefined

    @Column({type:"varchar", length:120})
    password: string

    @CreateDateColumn()
    createdAt?: string | Date

    @OneToOne(() => Address, (address) => address.user)
    address?: Address | undefined

    @OneToMany(() => Announcement, announcementsUser => announcementsUser.user)
    announcements: Announcement[]

}

export {User}