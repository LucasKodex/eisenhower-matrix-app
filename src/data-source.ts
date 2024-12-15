import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Card } from "./entity/Card"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Card],
    migrations: [],
    subscribers: [],
})
