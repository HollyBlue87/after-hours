# After Hours — React Build Recipe

## The Big Recipe

```text
WIREFRAME / IDEA
       ↓
BREAK INTO COMPONENTS
       ↓
CREATE .jsx FILES
       ↓
WRITE JSX
       ↓
IMPORT COMPONENTS
       ↓
RENDER COMPONENTS
       ↓
STYLE WITH CSS
       ↓
ADD INTERACTION
       ↓
ADD DATA
       ↓
CONNECT COMPONENTS
       ↓
TEST
       ↓
REFACTOR / REUSE
```

## 1. Plan

Ask:

- What am I building?
- What should the user see?
- What should the user be able to do?
- What happens when they click/type/select?
- What data will the feature need?

Use the Figma wireframe and `DESIGN-SYSTEM.md` as the visual reference.

## 2. Break the Page into Components

Example:

```text
HOME PAGE
│
├── Navbar
├── Hero
├── SearchBar
├── CocktailCard
├── CocktailGrid
├── AiBartender
└── Footer
```

If a piece has its own job, it is probably a component.

## 3. Create the Component

Create a `.jsx` file:

```text
src/
└── components/
    ├── Navbar.jsx
    ├── Navbar.css
    ├── SearchBar.jsx
    └── SearchBar.css
```

Basic component:

```jsx
function SearchBar() {
  return (
    <div>
      Search
    </div>
  )
}

export default SearchBar
```

Component names start with a capital letter.

## 4. Write the JSX

Ask:

> What should this component display?

Start with structure before worrying about visual polish.

```jsx
function SearchBar() {
  return (
    <form>
      <input type="text" />
      <button>Search</button>
    </form>
  )
}

export default SearchBar
```

## 5. Import the Component

If it lives in another file:

```jsx
import SearchBar from "./components/SearchBar"
```

Mental model:

```text
SearchBar.jsx
      ↓
    export
      ↓
    import
      ↓
   App.jsx
```

## 6. Render the Component

Use it like an HTML element:

```jsx
<SearchBar />
```

Mental shortcut:

```text
<SearchBar />
```

means:

> Put the SearchBar component on the page.

## 7. Style the Component

Create a CSS file for component-specific styling:

```text
SearchBar.jsx
SearchBar.css
```

Import it:

```jsx
import "./SearchBar.css"
```

Global CSS lives in `index.css`.

Component-specific CSS lives beside the component.

## 8. Add Interaction

Ask:

> What should happen when the user interacts with this?

Common React events:

```jsx
onClick
onChange
onSubmit
onKeyDown
```

Example:

```jsx
<button onClick={handleClick}>
  Search
</button>
```

This is similar to vanilla JavaScript events, but React uses JSX event handlers.

## 9. Add State

Ask:

> Does something need to change while the user uses the application?

If yes, you may need state.

```jsx
const [searchTerm, setSearchTerm] = useState("")
```

Think:

```text
searchTerm
    ↓
current value

setSearchTerm()
    ↓
changes the value
```

Common After Hours state:

- Search term
- Favourite cocktails
- AI input
- Loading status
- API results
- Modal open/closed
- Selected cocktail

## 10. Add Data

Ask:

> Where does the information come from?

Possible sources:

```text
Hard-coded data
      ↓
Arrays / objects

User input
      ↓
State

Cocktail API
      ↓
fetch()
      ↓
JSON
      ↓
State

AI
      ↓
Recommendation data
      ↓
State
```

API mental model:

```text
Cocktail API
     ↓
fetch()
     ↓
response
     ↓
JSON
     ↓
array of cocktail objects
     ↓
setCocktails()
     ↓
React renders cards
```

## 11. Pass Data with Props

When one component needs to give information to another, use props.

```jsx
<CocktailCard
  name="Mojito"
  description="Refreshing and minty"
/>
```

Receive them:

```jsx
function CocktailCard({ name, description }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
    </article>
  )
}
```

Mental model:

```text
Parent
   │
   │ props
   ↓
Child component
```

## 12. Reuse Components

Instead of creating separate HTML for every cocktail, create one reusable component:

```text
CocktailCard
```

Then:

```jsx
<CocktailCard cocktail={mojito} />
<CocktailCard cocktail={negroni} />
<CocktailCard cocktail={margarita} />
```

The component stays the same. The data changes.

## 13. Routing

Use React Router when different URLs should display different pages/views.

Mental model:

```text
URL
 ↓
Route
 ↓
Component
```

Example:

```text
/             → Home
/cocktails    → Cocktails
/ingredients  → Ingredients
/favourites   → Favourites
```

Basic structure:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cocktails" element={<Cocktails />} />
</Routes>
```

Router vocabulary:

```text
BrowserRouter
    ↓
Provides routing to the application

Routes
    ↓
Container for routes

Route
    ↓
Defines one URL → component relationship
```

## 14. Test

After each meaningful change:

```text
SAVE
 ↓
LOOK AT BROWSER
 ↓
TEST IT
 ↓
CHECK CONSOLE
```

Check:

- Does it look right?
- Is spacing correct?
- Is text readable?
- Does the button work?
- Does the route work?
- Does the API return data?
- Does it work on mobile, tablet and desktop?

## 15. Debug

When something doesn't work:

```text
WHAT DID I EXPECT?
        ↓
WHAT ACTUALLY HAPPENED?
        ↓
IS THERE AN ERROR?
        ↓
WHICH FILE IS INVOLVED?
        ↓
WHICH LINE?
        ↓
WHAT CHANGED LAST?
```

Check the browser console, VS Code terminal, component, import path, CSS selector and API response.

## 16. Refactor

Once something works, ask:

- Is this repeated?
- Could this become a reusable component?
- Is this logic in the right place?
- Is this CSS duplicated?
- Are my variable names clear?

Don't refactor before you understand the working version.

---

# Component Recipe

Whenever we build something new:

```text
1. WHAT DOES IT NEED TO DO?
            ↓
2. WHAT COMPONENT DO I NEED?
            ↓
3. CREATE Component.jsx
            ↓
4. WRITE THE JSX
            ↓
5. IMPORT IT
            ↓
6. RENDER IT
            ↓
7. CREATE Component.css
            ↓
8. STYLE IT
            ↓
9. ADD EVENTS
            ↓
10. ADD STATE IF NEEDED
            ↓
11. ADD DATA / API IF NEEDED
            ↓
12. PASS PROPS IF NEEDED
            ↓
13. TEST
```

# After Hours Example — Cocktail Search

```text
CocktailsPage
├── Navbar
├── SearchBar
├── CocktailGrid
│   └── CocktailCard
└── AiBartender
```

Data flow:

```text
Search input
    ↓
State

Search request
    ↓
Cocktail API

API response
    ↓
Cocktail array
    ↓
CocktailCard
    ↓
Screen
```

Interaction:

```text
User types
    ↓
onChange
    ↓
state updates

User presses Enter
    ↓
onKeyDown / form submit
    ↓
API request

User clicks cocktail
    ↓
React Router
    ↓
Cocktail Details
```

# When You Don't Know What to Do

Ask these questions in order:

```text
1. What am I trying to build?

2. Is this a component?

3. What should it display?

4. Does it need CSS?

5. Does the user interact with it?

6. Does it need state?

7. Does it need data?

8. Does another component need that data?

9. Does it need a route?

10. How do I test it?
```

If you can answer those questions, you can usually work out the next step.

# After Hours Build Order

```text
1. React setup                    ✅
2. Design system                 ✅
3. Navbar                        🚧
4. Routing                       🚧
5. Home page
6. Cocktail API connection
7. Cocktail cards
8. Search
9. Cocktail details
10. Ingredients search
11. Favourites
12. AI Bartender modal
13. AI recommendations
14. Responsive polish
15. Accessibility
16. Error/loading states
17. Testing
18. Final Lighthouse checks
19. README / documentation
```

## Most Important

You do **not** need to memorise React.

You need to understand the workflow:

```text
PLAN
 ↓
COMPONENT
 ↓
JSX
 ↓
IMPORT
 ↓
RENDER
 ↓
CSS
 ↓
INTERACTION
 ↓
STATE
 ↓
DATA
 ↓
PROPS
 ↓
ROUTING
 ↓
TEST
```

The syntax becomes familiar through repetition.

**The method is what matters.**

One component. One problem. One step at a time.
