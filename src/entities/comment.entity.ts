import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.entitie"
import { Announcement } from "./announcement.entitie"


@Entity("comments")
class Comment{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "text"})
    content: string

    @CreateDateColumn({type: "date"})
    createdAt: string 

    @ManyToOne(() => User, user => user.comments)
    user: User

    @ManyToOne(() => Announcement, announcement => announcement.comments)
    announcement: Announcement

}

export { Comment }