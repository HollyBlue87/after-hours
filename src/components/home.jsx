import Hero from "./Hero"
import FeaturedCocktails from "./FeaturedCocktails";
import FeaturedNonAlcoholic from "./FeaturedNonAlcoholic"

function Home({ setIsBartenderOpen, setBartenderMode }) {
    return (
        <>
        <Hero setIsBartenderOpen={setIsBartenderOpen} setBartenderMode={setBartenderMode}/>
        <FeaturedCocktails/>
        <FeaturedNonAlcoholic/>
        </>
    )
}

export default Home