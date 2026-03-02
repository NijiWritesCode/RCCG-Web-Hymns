import express from "express"
import dotenv from "dotenv"
import router from "./routers/HymnRouter.js";
import { connectDb } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT

const app = express();

app.use(express.json());

app.use('/api/hymns', router)

connectDb()
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})