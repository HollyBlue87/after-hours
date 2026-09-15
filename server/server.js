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

    const { drinkTypes, spirit, mode, cocktail, missingIngredient } = req.body;

    if (mode === "missing") {
        const prompt = `
            You are a helpful bartender.

            The customer wants to make:
            ${cocktail.name}

            The ingredients are:
            ${cocktail.ingredients.map((item) =>
                `${item.measurement} ${item.ingredient}`
            ).join(", ")}

            The customer is missing:
            ${missingIngredient}

            Suggest ONE realistic substitute for the missing ingredient.

            Keep your response to 2-3 short sentences.
            Name the substitute and briefly explain how it will affect the drink.

            Prefer ingredients that are commonly available.
            If there is no sensible substitute, say so.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt,
        });

        res.json({
            recommendation: response.candidates[0].content.parts[0].text
        });

        return;
    }


    const cocktailResponse = await fetch(
        "http://localhost:3001/api/cocktails"
    );

    const allCocktails = await cocktailResponse.json();

    const eligibleCocktails = allCocktails.filter((cocktail) => {
        if (spirit === "Any") {
            return true;
        }

        const cocktailIngredients = [];

        for (let i = 1; i <= 15; i++) {
            const currentIngredient = cocktail[`strIngredient${i}`];

            if (currentIngredient) {
                cocktailIngredients.push(currentIngredient.toLowerCase());
            }
        }

        return cocktailIngredients.includes(spirit.toLowerCase());
    });

    const cocktailDetails = eligibleCocktails.map((cocktail) => {
        const ingredients = [];

        for (let i = 1; i <= 15; i++) {
            const currentIngredient = cocktail[`strIngredient${i}`];

            if (currentIngredient) {
                ingredients.push(currentIngredient);
            }
        }

        return {
            name: cocktail.strDrink,
            ingredients: ingredients
        };
    });

    const prompt = `
        You are the bartender for a cocktail recommendation app.

        The customer wants:
        - Flavour preferences: ${drinkTypes.join(", ")}
        - Preferred spirit: ${spirit}

        You may ONLY recommend a cocktail from this list:

        ${cocktailDetails.map((cocktail) =>
            `${cocktail.name}: ${cocktail.ingredients.join(", ")}`
        ).join("\n")}

        Recommend ONE cocktail from the list.

        Respond using exactly this format:

        Cocktail: [cocktail name]
        Why: [short explanation]
        Ingredients: [ingredients separated by commas]

        Do not recommend anything that is not on the list.
        `;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
    });

    res.json({
        recommendation: response.candidates[0].content.parts[0].text
    });
});

app.get("/api/cocktails", async (req, res) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const requests = alphabet.map((letter) =>
        fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        )
    );

    const responses = await Promise.all(requests);

    const data = await Promise.all(
        responses.map((response) => response.json())
    );

    const allCocktails = data
        .map((currentDrink) => currentDrink.drinks ?? [])
        .flat();

    res.json(allCocktails);
});

app.listen(3001, () => {
    console.log("Bartender server running on port 3001");
});