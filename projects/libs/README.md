# Shared Libraries and Components

This directory contains reusable libraries, components, and utilities that can be shared across different projects in the monorepo. It's built with React and TypeScript using Vite as the build tool.

## Purpose

The `libs` directory serves as a central location for:

- Reusable React components
- Common utility functions
- Shared hooks
- Type definitions
- Design system elements
- Other code that needs to be used across multiple projects

## Getting Started

### Installation

The dependencies for this library are installed when you run `pnpm install` at the root of the monorepo.

### Development

To develop and test components in isolation:

```bash
cd projects/libs
pnpm dev
```

This will start a development server with a sample application where you can test your components.

### Building

To build the library:

```bash
cd projects/libs
pnpm build
```

## Using Components in Other Projects

To use components from this library in other projects within the monorepo:

1. Export your component or utility from an appropriate file
2. Import it in your project using the package name

Example:

```tsx
// In your project
import { YourComponent } from 'libs/YourComponent';

function App() {
  return <YourComponent />;
}
```

## Adding New Components

When adding new components to the library:

1. Create a new directory under `src/components` for your component
2. Include the component implementation, styles, and tests
3. Export the component from an index file
4. Update the main exports if necessary

Example structure:

```
src/
  components/
    Button/
      Button.tsx
      Button.css
      Button.test.tsx
      index.ts
    index.ts  // Re-export all components
```

## Best Practices

- Keep components small and focused on a single responsibility
- Write comprehensive tests for shared components
- Document your components with comments or JSDoc
- Use TypeScript for type safety
- Follow the established coding style and patterns
- Consider accessibility when building UI components

## ESLint Configuration

The library uses ESLint for code quality. You can expand the configuration for type-aware linting:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // For stricter rules:
    ...tseslint.configs.strictTypeChecked,
    // For stylistic rules:
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```
