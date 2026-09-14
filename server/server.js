import express from "express";
import cors from "cors";
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const app = express();
const ai = new GoogleGenAI({});

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({ message: "Bartender server is working!" });
});

app.post("/api/bartender", async (req, res) => {
    console.log(req.body);

    const { drinkTypes, spirit } = req.body;

    const prompt = `Recommend me a cocktail that is ${drinkTypes.join(", ")} and uses ${spirit}.`;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: "Recommend me a cocktail.",
    });

    
    res.json({
    recommendation: response.candidates[0].content.parts[0].text
});
});

app.listen(3001, () => {
    console.log("Bartender server running on port 3001");
});