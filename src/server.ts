import express, {Request, Response} from "express";

const app = express();
const port: number = 8080;

app.get('/', (req: Request, res: Response)=>{
     res.send("Hello Typescript")
})

app.listen(port,()=>{
    console.log(`server listenning on ${port}`)
})