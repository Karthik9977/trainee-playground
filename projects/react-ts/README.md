# React + TypeScript Project

This project provides a modern React application setup with TypeScript, Vite, and comprehensive testing tools. It's designed as a learning playground for to explore React and TypeScript development.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant HMR
- 🔍 **TypeScript** - Type safety with full configuration
- ⚛️ **React** - Latest React with SWC for fast refresh
- 🧪 **Testing** - Comprehensive testing setup with Vitest, Testing Library, and MSW
- 🧹 **Linting** - ESLint with TypeScript-aware rules
- 💅 **Formatting** - Prettier for consistent code style

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v10.6.5 or compatible)

### Installation

The dependencies for this project are installed when you run `pnpm install` at the root of the monorepo.

### Development

To start the development server:

```bash
cd projects/react-ts
pnpm dev
```

This will start a development server at http://localhost:5173 (or another port if 5173 is in use).

### Building

To build the project for production:

```bash
cd projects/react-ts
pnpm build
```

The build output will be in the `dist` directory.

### Testing

This project comes with a comprehensive testing setup using Vitest and React Testing Library:

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

## Project Structure

```
src/
  ├── assets/        # Static assets like images, fonts, etc.
  ├── components/    # Reusable React components
  ├── mocks/         # MSW mocks for API testing
  ├── test/          # Test setup and utilities
  ├── App.tsx        # Main App component
  ├── main.tsx       # Application entry point
  └── ...
```

## Creating Components

### Component Structure

When creating new components, follow this structure:

```
src/components/
  └── Button/
      ├── Button.tsx       # Component implementation
      ├── Button.test.tsx  # Component tests
      ├── Button.css       # Component styles (if using CSS)
      └── index.ts         # Export the component
```

### Component Example

```tsx
// src/components/Button/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`button button-${variant}`} 
      {...props}
    >
      {children}
    </button>
  );
}
```

```tsx
// src/components/Button/index.ts
export { Button } from './Button';
```

### Using Components

Import components using the path alias:

```tsx
import { Button } from '@/components/Button';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

## Path Aliases

This project is configured with path aliases for easier imports:

```tsx
// Instead of this:
import { Button } from '../../components/Button';

// You can use:
import { Button } from '@/components/Button';
```

## Testing

### Component Testing

```tsx
// src/components/Button/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    await userEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### API Mocking

This project uses MSW (Mock Service Worker) for API mocking:

```tsx
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]);
  }),
];
```

## Best Practices

- Use TypeScript's type system to its fullest
- Write tests for all components
- Use path aliases for cleaner imports
- Follow the established component structure
- Use React hooks for state management
- Keep components small and focused
- Use proper prop typing with interfaces

## ESLint Configuration

This project uses ESLint for code quality. The configuration is already set up with TypeScript-aware rules.

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/guide/)
- [Vitest Documentation](https://vitest.dev/guide/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [MSW Documentation](https://mswjs.io/docs/)
