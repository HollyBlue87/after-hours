import "./Bartender.css";
import { useEffect, useRef, useState } from "react";

function Bartender({ setIsBartenderOpen, mode, bartenderCocktail }) {

    const API_URL = import.meta.env.VITE_API_URL || "";

    const [missingIngredient, setMissingIngredient] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bartender",
            text: "Evening. What can I pour you?"
        }
    ]);
    const [userMessage, setUserMessage] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const chatMessagesRef = useRef(null);

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop =
                chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const spiritOptions = [
    "Vodka",
    "Gin",
    "Rum",
    "Tequila",
    "Whisky",
    "Any"
    ];


    function addQuickPick(pick) {
        if (userMessage.includes(pick)) {
            return;
        }

        if (userMessage.trim() === "") {
            setUserMessage(pick);
        } else {
            setUserMessage(`${userMessage}, ${pick}`);
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
                onClick={() => addQuickPick(type)}
                className=""
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
                onClick={() => addQuickPick(option)}
                className=""
            >
                {option}
            </button>
        )
    });

    async function handleSendMessage() {
        if (userMessage.trim() === "") {
            return;
        }

        setIsThinking(true);

        const newUserMessage = {
            sender: "user",
            text: userMessage
        };

        const updatedMessages = [
            ...messages,
            newUserMessage
        ];

        setMessages(updatedMessages);
        setUserMessage("");

        try {
            const response = await fetch(`${API_URL}/api/bartender`,  {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mode: "chat",
                    messages: updatedMessages
                }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            setIsThinking(false);

            const bartenderMessage = {
                sender: "bartender",
                text: data.recommendation
            };

            setMessages([
                ...updatedMessages,
                bartenderMessage
            ]);

        } catch (error) {
            console.error("Bartender request failed:", error);

            setIsThinking(false);

            setMessages([
                ...updatedMessages,
                {
                    sender: "bartender",
                    text: "Sorry, I'm a little busy behind the bar right now. Please try again in a moment."
                }
            ]);
        }
    }


    async function handleAlternative() {
        setIsThinking(true);

        const response = await fetch(`${API_URL}/api/bartender`,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mode,
                cocktail: bartenderCocktail,
                missingIngredient
            }),
        });
        const data = await response.json();

        setIsThinking(false);

        setMessages([
            ...messages,
            {
                sender: "bartender",
                text: data.recommendation
            }
        ]);
    }

    return (
        <div className="bartender-modal">
            <h2>Ask The Bartender</h2>

            <div className="bartender-chat">

                <div className="chat-messages" ref={chatMessagesRef}>
                    {messages.map((message, index) => (
                        <p key={index} className={message.sender}>
                            {message.text}
                        </p>
                    ))}
                    
                    {isThinking && (
                        <p className="bartender thinking">
                            Bartender is thinking...
                        </p>
                    )}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Tell me what you're craving..."
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSendMessage();
                            }
                        }}
                    />

                    <button
                        type="button"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>

            </div>

            {mode === "recommend" && (
                <>
                    <div className="quick-picks">
                        <h3>Quick picks</h3>

                        <div className="drink-type-options">
                            {selectDrink}
                        </div>

                        <div className="spirit-options">
                            {selectSpirit}
                        </div>
                    </div>
                </>
            )}

            {mode === "missing" && (
                <>
                    <h3>{bartenderCocktail.name}</h3>

                    <ul>
                        {bartenderCocktail.ingredients.map((item) => (
                            <li key={item.ingredient}>
                                {item.measurement} {item.ingredient}
                            </li>
                        ))}
                    </ul>

                    <h3>Which ingredient are you missing?</h3>

                    <div className="missing-ingredient-options">
                        {bartenderCocktail.ingredients.map((item) => (
                            <button
                                key={item.ingredient}
                                type="button"
                                onClick={() => setMissingIngredient(item.ingredient)}
                                className={missingIngredient === item.ingredient ? "selected" : ""}
                            >
                                {item.ingredient}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={handleAlternative}
                        >
                            Find an Alternative
                        </button>
                    </div>
                </>
            )}

            <button
                className="bartender-close"
                onClick={() => setIsBartenderOpen(false)}
                aria-label="Close bartender"
            >
                ×
            </button>
        </div>
    );
}

export default Bartender;