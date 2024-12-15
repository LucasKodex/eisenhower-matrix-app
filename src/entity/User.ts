import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { Card } from "./Card"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid: string

    @Column()
    login: string

    @Column()
    password: string

    @OneToMany(() => Card, (card) => card.user)
    cards: Card[]
}
