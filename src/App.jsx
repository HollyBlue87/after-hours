import Navbar from "./components/Navbar"
import Home from "./components/Home"
import MyIngredients from "./components/MyIngredients"
import SearchCocktails from "./components/SearchCocktails"
import CocktailDetails from "./components/CocktailDetails"
import Favourites from "./components/Favourites"
import Bartender from "./components/Bartender";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom"
import { useState } from "react";

function App() {
  const [isBartenderOpen, setIsBartenderOpen] = useState(false);
  const [isBartenderMinimized, setIsBartenderMinimized] = useState(false);
  const [bartenderMode, setBartenderMode] = useState("recommend");
  const [bartenderCocktail, setBartenderCocktail] = useState(null);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home 
          setIsBartenderOpen={setIsBartenderOpen}
          setBartenderMode={setBartenderMode}/>}/>
        <Route path="/search" element={<SearchCocktails />} />
        <Route path="/cocktail/:id" element={
          <CocktailDetails 
            setIsBartenderOpen={setIsBartenderOpen} 
            setBartenderMode={setBartenderMode}
            setBartenderCocktail={setBartenderCocktail}/>} />
        <Route path="/ingredients" element={<MyIngredients/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {isBartenderOpen && !isBartenderMinimized && (
          <Bartender
              setIsBartenderOpen={setIsBartenderOpen}
              setIsBartenderMinimized={setIsBartenderMinimized}
              mode={bartenderMode}
              bartenderCocktail={bartenderCocktail}
          />
      )}

      {isBartenderMinimized && (
          <button
              className="bartender-minimized"
              onClick={() => setIsBartenderMinimized(false)}
          >
              Ask The Bartender
          </button>
      )}
      <Footer />
    </>
  )
}

export default App

