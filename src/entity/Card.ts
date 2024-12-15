import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Card extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid: string

    @Column()
    title: string

    @Column()
    description: string

    @Column({
        type: "integer",
        default: 0,
    })
    urgency: number
    
    @Column({
        type: "integer",
        default: 0,
    })
    importance: number

    @ManyToOne(() => User, (user) => { user.cards })
    user: User
}
