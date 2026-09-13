import Hero from "./Hero"
import FeaturedCocktails from "./FeaturedCocktails";
import FeaturedNonAlcoholic from "./FeaturedNonAlcoholic"

function Home({ setIsBartenderOpen }) {
    return (
        <>
        <Hero setIsBartenderOpen={setIsBartenderOpen} />
        <FeaturedCocktails/>
        <FeaturedNonAlcoholic/>
        </>
    )
}

export default Home