import Hero from "./Hero"
import FeaturedCocktails from "./FeaturedCocktails";
import FeaturedNonAlcoholic from "./FeaturedNonAlcoholic"

function Home({ setIsBartenderOpen, setBartenderMode }) {
    return (
        <main>
        <Hero setIsBartenderOpen={setIsBartenderOpen} setBartenderMode={setBartenderMode}/>
        <FeaturedCocktails/>
        <FeaturedNonAlcoholic/>
        </main>
    )
}

export default Home