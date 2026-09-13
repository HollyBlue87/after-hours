import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({ message: "Bartender server is working!" });
});

app.listen(3001, () => {
    console.log("Bartender server running on port 3001");
});