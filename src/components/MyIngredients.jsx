import { useState } from "react";


function MyIngredients () {
    const [searchTerm, setSearchTerm] = useState("");
    const [ingredient, setIngredient] = useState([])
    const [error, setError] = useState ("")

    function AddIngredient (e) {
        setError("");
        e.preventDefault();

        if (searchTerm === "") {
            setError("Please enter an ingredient!");
            return;
            }

        setIngredient([...ingredient, searchTerm])
        setSearchTerm("")
        }

        function removeIngredient(item) {
            setIngredient(
                ingredient.filter((currentIngredient) => currentIngredient !== item
            )
        )
            
    }

    return (
        <>
        <form onSubmit={AddIngredient}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
                <button 
                >Add Ingredient
                </button>
            </form>

            {ingredient.map((item) => (
                <p>{item} <button onClick={() => removeIngredient(item)}>X</button></p>
            ))}
            </>

    )
    }

export default MyIngredients;