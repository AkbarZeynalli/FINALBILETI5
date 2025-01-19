import express from "express"
import "dotenv/config"
import "./src/db/dbConnecttion.js"
import productRouter from "./src/routers/productRouter.js"
import cors from "cors"


const port = process.env.PORT || 5001
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/Product", productRouter)

app.get("/", (req, res) => {
    res.send("Salam")
})

app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`);
})