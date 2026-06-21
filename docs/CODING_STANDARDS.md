# Coding Standards

## File Naming
- Components: `PascalCase` (e.g., `HomeScreen.jsx`, `AROverlay.jsx`)
- Utilities/Services: `camelCase` (e.g., `authService.js`, `ruleEngine.js`)
- Constants: `UPPER_SNAKE_CASE` inside files
- JSON data files: `camelCase` (e.g., `ingredientDictionary.json`)

## Component Structure
Every component file must follow this order:
1. Import statements (React, then libraries, then local)
2. Constants defined outside component
3. Functional component with JSDoc comment header
4. Styles using `StyleSheet.create()` at bottom of file
5. Default export

## Commenting
- All service functions must have JSDoc comments.
- Complex logic blocks must have inline comments.
- All TODO items must be marked with: `// TODO: [description]`

## Styling
- No inline styles except for dynamic values.
- All colors referenced from `src/utils/colors.js`.
- All font sizes referenced from `src/utils/typography.js`.
- Follow Material Design spacing: 8px grid system.

## Color Palette
- Primary Green: `#4CAF50` (Safe indicator)
- Primary Red: `#F44336` (Unsafe indicator)
- Warning Orange: `#FF9800` (Warning indicator)
- Brand Primary: `#2E7D32` (NutriLens brand dark green)
- Brand Secondary: `#81C784` (NutriLens brand light green)
- Background White: `#FFFFFF`
- Surface Light: `#F5F5F5`
- Text Primary: `#212121`
- Text Secondary: `#757575`

## Error Handling
- All async functions must use `try/catch` blocks.
- All Firebase/ML calls must handle errors gracefully.
- User-facing error messages must be clear and actionable.
