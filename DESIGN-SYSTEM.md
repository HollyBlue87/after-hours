# After Hours — Design System

## Overall Style

**Dark • Sophisticated • Premium • Atmospheric**

After Hours should feel like a late-night cocktail lounge combined with a modern cocktail discovery experience.

---

## Colour Palette

| Colour | Hex | Purpose |
|---|---|---|
| Midnight Charcoal | `#11100F` | Primary page background |
| Dark Espresso | `#1B1715` | Navigation and secondary sections |
| Warm Charcoal | `#24201D` | Cards, panels and content surfaces |
| Soft Ivory | `#F5F0E8` | Primary text |
| Muted Champagne | `#C8BFB2` | Secondary text |
| Champagne Gold | `#C9A45C` | Primary accent and CTAs |
| Light Gold | `#E0BE78` | Gold hover state |
| Teal | To be finalised | Secondary accent and AI Bartender |
| Subtle Bronze | `#3A332C` | Borders and dividers |

The exact teal will be selected during implementation after testing it against the dark backgrounds and accessibility contrast.

---

## Typography

### Parisienne
Brand / decorative typography. Used for the **After Hours** wordmark and occasional decorative text.

### Playfair Display
Main headings and cocktail names.

### Poppins
Body text and UI: navigation, buttons, descriptions, labels, search and forms.

---

## Buttons

### Primary CTA
Example: **FIND A COCKTAIL**

- Background: `#11100F`
- Border: Champagne Gold `#C9A45C`
- Text: Soft Ivory `#F5F0E8`
- Border radius: 8px
- Subtle gold glow
- Hover: slightly stronger glow and subtle lift

### Secondary CTA
Example: **MY INGREDIENTS**

- Background: `#11100F`
- Border: Teal
- Text: Soft Ivory `#F5F0E8`
- Border radius: 8px
- Subtle teal glow

Used for lower-hierarchy actions such as My Ingredients, Browse Cocktails and Try Again.

### AI Bartender CTA
Example: **✦ ASK THE AI BARTENDER ✦**

- Dark background
- Teal border
- Ivory text
- Subtle teal glow
- Gold ✦ accents
- Border radius: 8px

The AI Bartender is a special feature and is **not** part of the main navigation.

---

## Text Links

Examples: **← Back to Results**, **View All**, **Try Again**

Text links should not look like large buttons.

- Normal: Soft Ivory
- Hover: Gold or Teal depending on context
- Keep the treatment understated and elegant.

---

## Favourite Button

### Inactive
`♡` — dark background, subtle Bronze border, ivory icon.

### Hover
Gold border, gold heart, subtle gold glow.

### Active
`♥` — gold icon with gold border/glow.

---

## Search

The search icon should be **inside the search field**.

Example:

`Search cocktails...                              🔍`

Normal:
- Dark Espresso background
- Subtle Bronze border
- Muted Champagne placeholder
- Poppins typography

Focus:
- Gold border
- Subtle gold glow
- Gold search icon

Search can be triggered by clicking the search icon or pressing **Enter** using a `keydown` event.

---

## Cocktail Cards

### Image-led design

The cocktail photography should be the main visual focus.

- Background: `#24201D`
- Border: `#3A332C`
- Border radius: 12px
- Large cocktail image
- Favourite icon over the image
- Cocktail name: Playfair Display
- Supporting information: Poppins
- Short flavour/taste description
- Gold **View Cocktail** CTA

Example:

**MOJITO**

*Classic • Refreshing*

A refreshing combination of white rum, lime, mint and a touch of sweetness.

**[ VIEW COCKTAIL ]**

The description gives users a small indication of the drink's flavour/profile before they open the full recipe, similar to reading a wine's taste description before choosing it.

Hover:
- Subtle image zoom
- Slightly stronger border
- Subtle gold accent
- Very subtle card lift

---

## Navigation

### Desktop

**After Hours** — HOME — COCKTAILS — INGREDIENTS — FAVOURITES

- Navbar background: `#11100F`
- Wordmark: Parisienne + Champagne Gold
- Navigation: Poppins + Soft Ivory
- Hover: Champagne Gold
- Active page: Champagne Gold + subtle underline
- Bottom border: Subtle Bronze `#3A332C`
- No heavy shadow

### Mobile

**After Hours — ☰**

Use the same colours and typography with a collapsed hamburger menu.

---

## AI Bartender

The AI Bartender is **not a page** and is **not part of the main navigation**.

It opens as a modal.

### User journey

1. User clicks **✦ ASK THE AI BARTENDER ✦**
2. AI modal opens
3. User describes what they are looking for
4. AI processes their preferences
5. AI provides recommendations
6. User clicks **VIEW MY RECOMMENDATIONS**
7. User is redirected to the Cocktails / Results page
8. The Cocktails page displays the AI recommendations

The AI feature is intended as a discovery/fallback tool for users who cannot find what they want through normal searching or who do not know what cocktail they want.

The AI Bartender should be available as a dedicated CTA throughout the site.

---

## Footer

- Background: `#1B1715`
- Top border: `#3A332C`
- Wordmark: After Hours / Parisienne / Champagne Gold
- Tagline: **Discover your next pour.**
- Functional navigation links: HOME, COCKTAILS, INGREDIENTS, FAVOURITES
- Copyright: **© 2026 After Hours**

Do **not** include social media icons unless actual social media pages exist for the website. Do not include fake or placeholder social links.

---

## Imagery

### Cocktail imagery

- Cocktail-focused
- **No people**
- Dark/moody
- Atmospheric
- Premium
- High quality
- Dramatic lighting
- Cocktail is the focal point
- Warm/dark backgrounds where appropriate

Useful elements include glassware, garnishes, ice, citrus and fresh ingredients.

The cocktails themselves should provide colour against the dark interface.

### Hero imagery

Use a drink-specific hero image inspired by the existing After Hours landing-page concept.

The cocktail should be the primary visual focus, with enough dark negative space for text.

**No people.**

---

## Page Backgrounds

- Main background: `#11100F` — Midnight Charcoal
- Secondary sections: `#1B1715` — Dark Espresso
- Cards / panels: `#24201D` — Warm Charcoal
- Borders: `#3A332C` — Subtle Bronze

---

## Colour Hierarchy

**Gold** — Primary actions and important accents.

**Teal** — Secondary actions and AI feature.

**Ivory** — Main readable text.

**Muted Champagne** — Supporting text.

**Bronze** — Borders and dividers.

Dark brown/black colours should form the majority of the interface. Accent colours should be used sparingly.

---

## Border Radius

- Buttons: 8px
- Search/input: 8px
- Cocktail cards: 12px
- Larger panels/modals: 12–16px

Avoid excessive pill-shaped elements.

---

## Layout Principles

- Mobile-first design
- Responsive layout
- Use Bootstrap grid where appropriate
- Generous whitespace
- Consistent spacing between sections
- Content constrained on large screens
- Cocktail cards use consistent image proportions
- Avoid excessive shadows
- Avoid excessive gradients
- Avoid excessive rounded containers
- Keep the overall design restrained and premium

---

## Design Philosophy

After Hours should feel like a premium cocktail lounge rather than a generic recipe website.

The interface should remain dark, warm and restrained.

Gold should feel luxurious.

Teal should provide a contrasting secondary accent.

Cocktail photography should provide the main visual colour and excitement.

The design should prioritise usability while maintaining a sophisticated late-night atmosphere.

---

## Core User Discovery System

### SEARCH
**“I know roughly what I want.”**

### MY INGREDIENTS
**“I know what ingredients I have.”**

### AI BARTENDER
**“I don't know what I want / I can't find what I'm looking for.”**

All three routes ultimately lead users toward real cocktail recommendations and the Cocktail Details page.
