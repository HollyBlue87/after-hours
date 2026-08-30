import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SearchCocktails from "./components/SearchCocktails"
import CocktailDetails from "./components/CocktailDetails"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchCocktails />} />
        <Route path="/cocktail/:id" element={<CocktailDetails />} />
      </Routes>
    </>
  )
}

export default App

