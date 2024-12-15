import { AppDataSource } from "./data-source"
import dotenv from "dotenv";
import app from "./app"

const HTTP_PORT = 80;

dotenv.config();

AppDataSource.initialize().then(async () => {
    const PORT = process.env.PORT ?? HTTP_PORT;
    app.listen(PORT, function () {
        console.log(`Server listening on port ${PORT}`);
    });
}).catch(error => console.log(error))
