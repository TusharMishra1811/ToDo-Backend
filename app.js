import express  from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();


config({
    path:"./db/config.env",
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ["GET","PUT","POST","DELETE"],
    credentials: true
}))


//Using Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);

app.use((err,req,res,next)=>{
    return res.status(404).json({
        success:false,
        message:"Invalid Id",
    })
})
