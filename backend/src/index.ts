import  express  from "express";
import hate from './Routes/routes.ts'
import Run from "./Database/db.ts";
import cors from 'cors'
const app=express();
Run();
app.use(express.json())
app.use(cors())
app.use('/',hate)

app.listen(3332,()=>{
    console.log('server running');
})