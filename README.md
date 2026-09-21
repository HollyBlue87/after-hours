# After Hours

After Hours is an interactive cocktail website designed for adults who want to explore cocktails, discover drinks based on ingredients they already have, save their favourite cocktails, and receive personalised cocktail recommendations.

The project was developed using React and JavaScript, with cocktail data provided by TheCocktailDB API and an AI-powered bartender feature using Google's Gemini API.

The overall concept was to create the atmosphere of a dark, luxurious tropical cocktail bar while combining this visual experience with practical cocktail discovery tools.

## Contents

- [Overview](#overview)
- [UX / User Stories](#ux--user-stories)
- [Features](#features)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Future Development](#future-development)
- [Reflection](#reflection)
- [AI Mentoring Evidence](#ai-mentoring-evidence)

## Overview

After Hours is an interactive cocktail website designed to help users discover and explore cocktails in a visually engaging way.

Users can search for cocktails by name, find cocktails based on ingredients they already have, view detailed cocktail information, save favourites, and interact with an AI-powered bartender for personalised recommendations.

The project was developed using React and JavaScript. Cocktail information is provided by TheCocktailDB API, while Google's Gemini API powers the conversational bartender feature.

The site was designed around the concept of a dark, luxurious tropical cocktail bar. The visual design combines atmospheric imagery, gold accents and teal tones to create an immersive evening-bar aesthetic while keeping the interface practical and accessible across different screen sizes.

## UX / User Stories

The project was planned around user needs, with user stories used to identify the functionality required by the target audience. The stories were prioritised using the MoSCoW method to help guide development.

The complete user stories and their development status can be viewed on the [After Hours GitHub Project Board](YOUR-LINK-HERE).

### Main User Needs

The site was designed to allow users to:

- Discover cocktails in an engaging visual environment.
- Search for a specific cocktail.
- Find cocktails using ingredients they already have available.
- View cocktail ingredients and preparation instructions.
- Save cocktails they want to revisit.
- Ask for personalised cocktail recommendations.
- Explore alternative ingredients when they do not have everything required.
- Use the website comfortably across mobile, tablet and desktop screen sizes.

### Wireframes

Wireframes were created for all pages and required responsive breakpoints during the planning stage of the project.

The wireframes were used to establish the initial structure, content hierarchy and responsive layout of the website before development began.

The final implementation evolved from the original wireframes as development progressed. Responsive testing, API functionality and usability testing resulted in some changes to layouts and positioning.

The complete set of wireframes is included below.

#### Homepage

[wireframes here]

#### Search Cocktails

[wireframes here]

#### My Ingredients

[wireframes here]

#### Favourites

[wireframes here]

#### Cocktail Details

[wireframes here]

#### Ask The Bartender

[wireframes here]

## Features

### Homepage

- Dark, atmospheric hero section introducing the After Hours brand.
- Featured alcoholic cocktails.
- Featured non-alcoholic cocktails.
- Reusable cocktail cards displaying cocktail images, names and information.
- Navigation to the main areas of the website.
- Responsive layout across mobile, tablet and desktop screen sizes.

### Search Cocktails

- Search for cocktails by name using TheCocktailDB API.
- Displays matching cocktail results dynamically.
- Provides feedback when no cocktails are found.
- Responsive results grid across different screen sizes.
- Allows users to view individual cocktail details from the search results.

### My Ingredients

- Allows users to enter ingredients they currently have available.
- Displays added ingredients as removable items.
- Matches selected ingredients against available cocktail data.
- Displays cocktails that can be made using the selected ingredients.
- Uses locally filtered cocktail data to work around limitations of the available API endpoint.
- Allows users to view the details of matching cocktails.

### Cocktail Details

- Displays detailed information for an individual cocktail.
- Shows ingredients and measurements.
- Shows cocktail preparation instructions.
- Uses interactive cards to organise cocktail information.
- Ingredients and instructions can scroll when the content is longer than the available space.

### Favourites

- Allows users to save cocktails they want to revisit.
- Allows users to remove cocktails from their favourites.
- Uses React Context to share favourite state throughout the application.
- Displays saved cocktails on the dedicated Favourites page.

### Ask The Bartender

- Conversational AI bartender powered by Google's Gemini API.
- Provides cocktail recommendations based on the user's preferences and conversation.
- Uses cocktail information from TheCocktailDB as the source for cocktail recommendations.
- Provides alternative ingredient suggestions where appropriate.
- Maintains conversation context during the session.
- Includes quick-pick suggestions to help users start a conversation.
- Provides visual feedback while the bartender is generating a response.
- Keeps the Gemini API key on the server rather than exposing it in the frontend.

### Responsive Design

- Designed and tested across mobile, tablet and desktop breakpoints.
- Uses responsive layouts to adapt content and navigation to different screen sizes.
- Uses separate hero images at different breakpoints where a single image could not maintain a suitable composition.
- Responsive testing was carried out during development rather than only after the site was completed.

## Design

### Concept

The visual concept for After Hours was based around the atmosphere of a dark, luxurious tropical cocktail bar.

The aim was to create the feeling of an evening cocktail experience while keeping the interface clear and easy to navigate.

### Colour Palette

The colour palette was created to support the dark, luxurious tropical cocktail-bar concept.

The main colours include dark neutral backgrounds, gold accents, teal highlights and light text for contrast.

![After Hours colour palette](path-to-colour-palette-image)

- **Dark neutral tones** are used for the main backgrounds and create the atmospheric bar aesthetic.
- **Gold** is used for headings, borders and interactive elements, inspired by warm metallic details often associated with luxury bar interiors.
- **Teal** provides contrast against the darker background and introduces a tropical colour associated with the sea and cocktails.
- **Light text** provides readability against the dark backgrounds.

### Typography

Three fonts were selected to create a balance between the brand identity and readability.

- **Parisienne** is used for the After Hours wordmark and provides an elegant handwritten style.
- **Playfair Display** is used for headings to reinforce the sophisticated cocktail-bar aesthetic.
- **Poppins** is used for general interface text because of its clean and readable appearance.

### Imagery

The imagery was designed to reinforce the dark and atmospheric theme of the website.

AI-generated imagery was used to create a virtual cocktail-bar environment and supporting page imagery. Cocktail images are brighter and more colourful to provide visual contrast against the darker interface.

Different hero images were created for mobile and larger screens where a single image did not provide an effective composition at every breakpoint.

### Responsive Design

The project was developed and tested across mobile, tablet and desktop screen sizes.

Responsive design was an important part of development because some layouts that worked well on larger screens did not translate effectively to smaller screens.

The layouts were adjusted at different breakpoints to improve positioning, spacing, image composition and readability.

Responsive testing was carried out throughout development, allowing issues to be identified and corrected as individual pages were completed.

## Technologies Used

### Languages

- HTML5
- CSS3
- JavaScript

### Frameworks and Libraries

- React
- React Router
- Font Awesome

### APIs

- TheCocktailDB API — used to retrieve cocktail information.
- Google Gemini API — used to power the conversational AI bartender.

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Chrome DevTools

### Design and Content Tools

- Canva — used for design assets and visual editing.
- Favicon.io — used to create the website favicon.
- AI image generation tools — used to create supporting website imagery.

### Deployment

- GitHub Pages — used to host the React frontend.
- Render — used to host the backend server for the AI bartender.

## Development

The project was developed incrementally, with functionality and responsive design being tested throughout the development process.

### React Development

React was used to create reusable components and manage application state.

A reusable `CocktailCard` component was created so that cocktail information could be displayed consistently across different areas of the website, including featured cocktails, search results, ingredient-based results and favourites.

React state was used for interactive features such as search terms, ingredients, loading states and the AI bartender conversation.

React Context was introduced for the favourites functionality so that favourite cocktail state could be shared between different components and pages.

### API Integration

TheCocktailDB API was used as the main source of cocktail information.

An API limitation affected the My Ingredients feature because the required ingredient-based endpoint was not available in the way needed for the project. To work around this, cocktail data was retrieved alphabetically and filtered within the application based on the ingredients entered by the user.

This allowed the feature to provide ingredient-based cocktail matching while remaining within the available API functionality.

### AI Bartender Development

The AI bartender was added as an extension of the cocktail discovery functionality.

Google Gemini was selected to provide the conversational element of the bartender. The Gemini API is accessed through a separate server so that the API key is not exposed in the frontend.

The AI bartender was designed to work alongside TheCocktailDB rather than independently generating cocktail information. Cocktail data is supplied to the server so that recommendations can be based on cocktails available through the application's data source.

The bartender also provides alternative ingredient suggestions where appropriate and maintains the conversation context during a session.

### Responsive Development

Responsive design was developed and tested throughout the project.

Initial layouts were adapted at different breakpoints after testing revealed that some desktop layouts and imagery did not translate effectively to smaller screens.

Separate hero images were created for mobile and larger screens where necessary. CSS media queries were then used to adjust positioning, sizing, spacing and layout at different breakpoints.

### Debugging and Problem Solving

A number of development challenges were encountered during the project, including:

- Learning React while continuing to develop JavaScript knowledge.
- Managing state across multiple components.
- Implementing favourites using React Context.
- Working around limitations of the CocktailDB API.
- Connecting the Gemini AI service to the cocktail data.
- Handling temporary Gemini API availability and rate-limit issues.
- Resolving responsive layout and image-positioning problems.
- Debugging component behaviour and browser console errors.
- Ensuring shared CSS did not unintentionally affect unrelated components.

Development involved testing, debugging and refining features throughout rather than waiting until the end of the project.

## Testing

Testing was carried out throughout development to identify functional, responsive and accessibility issues before submission.

### Responsive Testing

Each page was tested at the required responsive breakpoints using Chrome DevTools.

Testing included:

- Mobile layouts.
- Tablet layouts.
- Desktop layouts.
- Real browser resizing outside of the fixed DevTools responsive viewport.
- Checking for horizontal overflow.
- Checking image cropping and positioning.
- Checking text, buttons and forms at different screen sizes.
- Checking navigation behaviour at different breakpoints.

Responsive issues were fixed during development rather than being left until the final testing stage.

### Functional Testing

Interactive features were tested to ensure that user actions produced the expected results.

Testing included:

- Cocktail name searches.
- Ingredient entry and removal.
- Ingredient-based cocktail matching.
- Cocktail details navigation.
- Favourite adding and removal.
- Favourites persistence between pages.
- AI bartender conversations.
- AI bartender quick-pick options.
- Alternative ingredient suggestions.
- Navigation links and mobile navigation.
- Error and empty-result messages.
- Loading states.

### Browser Console Testing

The browser developer console was checked during development to identify JavaScript errors, React warnings and failed API requests.

Issues discovered during development were investigated and fixed where appropriate.

### Lighthouse Testing

Lighthouse was used to evaluate:

- Performance
- Accessibility
- Best Practices
- SEO

Testing was repeated after making performance and accessibility improvements.

Final Lighthouse results will be recorded after production testing has been completed.

### Validation

The project was tested for HTML, CSS and JavaScript issues where appropriate.

Any errors or warnings discovered during testing were investigated and corrected where possible.

### Known Limitations

The project uses external APIs, meaning some functionality is dependent on third-party services being available and accepting requests.

The free version of TheCocktailDB API also has limitations that affected how the My Ingredients feature was implemented.

The Gemini API may also experience temporary rate limits or service availability issues, particularly when using a free-tier account.

## Deployment

The frontend of After Hours is deployed using GitHub Pages, while the backend server used by the AI bartender is hosted separately using Render.

### Frontend Deployment

The React application is hosted on GitHub Pages.

The project uses Vite and is configured with the GitHub Pages base path so that React Router works correctly when the application is hosted under the repository path.

A GitHub Actions workflow is used to build and deploy the frontend.

The Gemini API URL is supplied through a GitHub Actions secret rather than being hard-coded into the application.

### Backend Deployment

The backend server is deployed to Render.

The server handles communication with the Gemini API so that the Gemini API key is not exposed in the frontend application.

The Gemini API key is stored as an environment variable in Render.

### Deployment Process

The deployment workflow is:

1. Changes are committed and pushed to GitHub.
2. GitHub Actions builds the React application.
3. The production frontend is deployed to GitHub Pages.
4. The frontend communicates with the deployed backend on Render.
5. The backend communicates with the Gemini API.

Environment variables and API keys are kept out of the public repository.

