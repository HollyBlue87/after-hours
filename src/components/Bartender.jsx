import "./Bartender.css";
import { useState } from "react";

function Bartender({ setIsBartenderOpen }) {

    const [drinkTypes, setDrinkTypes] = useState([]);
    const [spirit, setSpirit] = useState("");
    const [recommendation, setRecommendation] = useState("");

    const spiritOptions = [
    "Vodka",
    "Gin",
    "Rum",
    "Tequila",
    "Whisky",
    "Any"
    ];


    function toggleDrinkType(type) {
        if (drinkTypes.includes(type)) {
            setDrinkTypes(
                drinkTypes.filter(
                    (currentType) => currentType !== type
                )
            );
        } else {
            setDrinkTypes([...drinkTypes, type]);
        }
    }

    const drinkTypeOptions = [
        "Fruity",
        "Sour",
        "Sweet",
        "Fresh",
        "Strong",
        "Bitter"
    ];

    const selectDrink = drinkTypeOptions.map(type => {
        return (
            <button
                key={type}
                type="button"
                onClick={() => toggleDrinkType(type)}
                className={drinkTypes.includes(type) ? "selected" : ""}
            >
                {type}
            </button>
        );
    });

    const selectSpirit = spiritOptions.map(option => {
        return (
            <button
                key={option}
                type="button"
                onClick={() => setSpirit(option)}
                className={spirit === option ? "selected" : ""}
            >
                {option}
            </button>
        )
    });

    async function handleRecommendation() {
        console.log("Recommendation button clicked");

        const response = await fetch("/api/bartender", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                drinkTypes,
                spirit,
            }),
        });

        const data = await response.json();

        setRecommendation(data.recommendation);
    }

    return (
        <div className="bartender-modal">
            <h2>Ask The Bartender</h2>

            <h3>What are you craving?</h3>

            <div className="drink-type-options">
                {selectDrink}
            </div>

            <div className="spirit-options">
                {selectSpirit}
            </div>

            <button onClick={handleRecommendation}>
                Recommend My Cocktail
            </button>

            {recommendation && (
                <p>{recommendation}</p>
            )}

            <button onClick={() => setIsBartenderOpen(false)}>
                Minimise
            </button>
        </div>
    );
}

export default Bartender;