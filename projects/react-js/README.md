# React + JavaScript Project

This project provides a modern React application setup with JavaScript, Vite, and comprehensive linting and testing tools. It's designed as a learning playground to explore React development with JavaScript.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant HMR
- ⚛️ **React** - Latest React with fast refresh
- 🧪 **Testing** - Testing setup with Jest and React Testing Library
- 🧹 **Linting** - Enhanced ESLint with React-specific rules
- 💅 **Modern JavaScript** - ES6+ features and best practices

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v10.6.5 or compatible)

### Installation

The dependencies for this project are installed when you run `pnpm install` at the root of the monorepo.

### Development

To start the development server:

```bash
cd projects/react-js
pnpm dev
```

This will start a development server at http://localhost:5173 (or another port if 5173 is in use).

### Building

To build the project for production:

```bash
cd projects/react-js
pnpm build
```

The build output will be in the `dist` directory.

### Linting

To run ESLint and check your code for issues:

```bash
pnpm lint
```

To automatically fix linting issues when possible:

```bash
pnpm lint:fix
```

## Project Structure

```
src/
  ├── assets/        # Static assets like images, fonts, etc.
  ├── components/    # Reusable React components
  ├── hooks/         # Custom React hooks
  ├── context/       # React context providers
  ├── App.jsx        # Main App component
  └── main.jsx       # Application entry point
```

## Creating Components

### Component Structure

When creating new components, follow this structure:

```
src/components/
  └── Button/
      ├── Button.jsx       # Component implementation
      ├── Button.test.jsx  # Component tests
      ├── Button.css       # Component styles (if using CSS)
      └── index.js         # Export the component
```

### Component Example

```jsx
// src/components/Button/Button.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export function Button({ variant = 'primary', children, onClick, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className={`button button-${variant} ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};
```

```js
// src/components/Button/index.js
export { Button } from './Button';
```

### Using Components

Import components like this:

```jsx
import { Button } from './components/Button';

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

## Testing

This project uses Jest and React Testing Library for testing components. A complete testing setup has been included with the following features:

- Jest for test running and assertions
- React Testing Library for component testing
- JSDOM for browser-like environment
- Babel configuration for JSX support
- Asset mocking (CSS, SVG, and other files)

### Running Tests

To run the tests:

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate test coverage report
pnpm test:coverage
```

### Testing Examples

#### 1. Component Testing Example (Button)

A sample Button component with tests has been included as a reference:

```jsx
// src/components/Button/Button.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
    expect(buttonElement).toHaveClass('button-primary');
  });

  test('applies secondary variant class when specified', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveClass('button-secondary');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### 2. App Component Testing (Counter)

The main App component with counter functionality is also tested:

```jsx
// src/App.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component Counter Functionality', () => {
  test('renders with initial count of 0', () => {
    render(<App />);
    
    const counterButton = screen.getByRole('button', { name: /count is 0/i });
    expect(counterButton).toBeInTheDocument();
    expect(counterButton).toHaveTextContent('count is 0');
  });

  test('increments counter when button is clicked', () => {
    render(<App />);
    
    const counterButton = screen.getByRole('button', { name: /count is 0/i });
    
    // Click the button to increment counter
    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent('count is 1');
    
    // Click again
    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent('count is 2');
  });
});
```

### Test Configuration

This project includes several important test configuration files:

- `jest.config.js` - Configuration for Jest test runner
- `babel.config.js` - Babel setup for transpiling JSX in tests
- `src/test/setupTests.js` - Global test setup file
- `src/test/styleMock.js` - Mock for CSS imports
- `src/test/fileMock.js` - Mock for asset files (SVG, images, etc.)
```

## ESLint Configuration

This project includes an enhanced ESLint configuration with industry best practices for React. The configuration includes:

- React-specific rules
- Accessibility (a11y) rules
- Import/export organization
- React Hooks rules

Check the `eslint.config.js` file for the complete configuration.

## Best Practices

- Use functional components with hooks instead of class components
- Implement prop validation using PropTypes
- Keep components small and focused on a single responsibility
- Use CSS modules or styled-components for component styling
- Follow the ESLint rules for consistent code quality
