import express from "express"
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT

const app = express();

app.get("/", (req, res) => {
    res.send("Home");
})

app.listen(7900, () => {
    console.log(`http://localhost:${PORT}`);
})