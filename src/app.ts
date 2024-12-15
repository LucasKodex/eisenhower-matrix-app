import express, { Request, Response } from "express";
const app = express();

app.get("/", function (req: Request, res: Response) {
    res.send("<h1>Hello, world!</h1>");
})

export default app;
