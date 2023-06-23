import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitie";



@Entity("address")
class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type:"varchar", length: 255})
    street: string

    @Column({type:"varchar", length: 10})
    number: string

    @Column({type: "varchar", length: 100, nullable: true})
    complement?: string | null | undefined

    @Column({type: "varchar", length: 9})
    cep: string

    @Column({type:"varchar", length: 50})
    city: string

    @Column({type:"varchar", length: 2})
    state: string

    @OneToOne(() => User, (user) => user.address, {onDelete:"CASCADE"})
    @JoinColumn()
    user: User

}

export {Address}