import express from "express";
import cors from "cors";
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const app = express();
const ai = new GoogleGenAI({});

const PORT = process.env.PORT || 3001;
const SERVER_URL = `http://localhost:${PORT}`;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({ message: "Bartender server is working!" });
});

app.post("/api/bartender", async (req, res) => {
    console.log(req.body);

    const { drinkTypes, spirit, mode, cocktail, missingIngredient, messages } = req.body;

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

    if (mode === "chat") {
        const cocktailResponse = await fetch(
            `${SERVER_URL}/api/cocktails`
        );

        const allCocktails = await cocktailResponse.json();

        const cocktailDetails = allCocktails.map((cocktail) => {
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

        const conversation = messages.map((message) =>
            `${message.sender}: ${message.text}`
        ).join("\n");

        const prompt = `
            You are the bartender at After Hours, a friendly and knowledgeable cocktail bar.

            Have a natural, friendly conversation with the customer.
            Respond like a real bartender having a conversation, not like a search engine or a form.

            Keep responses short and conversational, usually 2-4 sentences.
            When recommending a drink, recommend only ONE cocktail at a time.
            Do not give lists of cocktail options unless the customer specifically asks for alternatives.
            Remember what the customer has already told you.
            If they change their preferences, adapt your suggestions.

            Do not use Markdown, bullet points, headings, or labels.
            Write naturally as if speaking directly to the customer.

            You may recommend cocktails from this list only:

            ${cocktailDetails.map((cocktail) =>
                `${cocktail.name}: ${cocktail.ingredients.join(", ")}`
            ).join("\n")}

            Conversation so far:

            ${conversation}

            Respond naturally to the customer's latest message.
            Do not use labels such as "Cocktail:", "Why:", or "Ingredients:".
            Do not invent cocktails that are not in the list.
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
        `${SERVER_URL}/api/cocktails`
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

    const randomCocktails = [...eligibleCocktails]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    const cocktailDetails = randomCocktails.map((cocktail) => {
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

    console.log("Eligible cocktails:", cocktailDetails.length);
    console.log(cocktailDetails.slice(0, 10));

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

app.listen(PORT, () => {
    console.log(`Bartender server running on port ${PORT}`);
});