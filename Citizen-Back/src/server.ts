import express,{json} from 'express'
import authRoutes from './Routes/authRoutes'
import cron from 'node-cron'
import {run} from './EmailService'
import viewRoutes from './Routes/viewRoutes'
import incidentRoutes from './Routes/incidentRoutes'
// import cors from 'cors'

const app= express()

cron.schedule('*/10 * * * *', async () => {
    await run();
});


// middleware
// app.use(cors())     //called the cors function
app.use(json())

// app.use(express.json());

// routes
app.use("/auth", authRoutes)
app.use("/view", viewRoutes)
app.use("/incident", incidentRoutes)
app.use("/poll", incidentRoutes)



app.listen(4000,()=>{
    console.log("Server Running....");
    
})

