import {app} from "./app.js"
import { dataBase } from "./db/db.js";

dataBase();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

