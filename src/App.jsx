import Navbar from "./components/Navbar"
import Home from "./components/Home"
import MyIngredients from "./components/MyIngredients"
import SearchCocktails from "./components/SearchCocktails"
import CocktailDetails from "./components/CocktailDetails"
import Favourites from "./components/Favourites"
import Bartender from "./components/Bartender";
import { Routes, Route } from "react-router-dom"
import { useState } from "react";

function App() {
  const [isBartenderOpen, setIsBartenderOpen] = useState(false);
  console.log("Bartender open:", isBartenderOpen);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home setIsBartenderOpen={setIsBartenderOpen} />} />
        <Route path="/search" element={<SearchCocktails />} />
        <Route path="/cocktail/:id" element={<CocktailDetails />} />
        <Route path="/ingredients" element={<MyIngredients/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>

      {isBartenderOpen && (
          <Bartender setIsBartenderOpen={setIsBartenderOpen} />
      )}
    </>
  )
}

export default App

