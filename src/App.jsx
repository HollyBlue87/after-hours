import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SearchCocktails from "./components/SearchCocktails"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchCocktails />} />
      </Routes>
    </>
  )
}

export default App

