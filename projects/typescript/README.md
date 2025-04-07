# TypeScript Project

This project provides a modern TypeScript development environment with Vite as the build tool and Vitest for testing. It's designed as a learning playground to explore TypeScript's features and capabilities.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant HMR
- 🔍 **TypeScript** - Type safety with comprehensive configuration
- 🧪 **Testing** - Vitest for unit testing with coverage reports
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
cd projects/typescript
pnpm dev
```

This will start a development server at http://localhost:5173 (or another port if 5173 is in use).

### Building

To build the project for production:

```bash
cd projects/typescript
pnpm build
```

The build output will be in the `dist` directory.

### Testing

This project comes with a testing setup using Vitest:

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
  ├── counter.ts       # Example TypeScript module
  ├── example.test.ts  # Example test file
  ├── main.ts          # Application entry point
  ├── style.css        # Global styles
  └── vite-env.d.ts    # Vite environment type definitions
```

## TypeScript Features to Explore

### Basic Types

```typescript
// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}
```

### Interfaces

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only property
}

function createUser(user: User): User {
  return {
    ...user,
    createdAt: new Date()
  };
}
```

### Classes

```typescript
class Person {
  private name: string;
  protected age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

class Employee extends Person {
  private department: string;
  
  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }
  
  getDetails(): string {
    return `${this.greet()} and I work in ${this.department}`;
  }
}
```

### Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Using the function
let output = identity<string>("myString");

// Type inference
let output2 = identity(42); // Type is inferred as number
```

### Advanced Types

```typescript
// Union Types
type StringOrNumber = string | number;

// Intersection Types
type Employee = Person & { employeeId: number };

// Type Guards
function isString(value: any): value is string {
  return typeof value === "string";
}

// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;
```

## Path Aliases

This project is configured with path aliases for easier imports:

```typescript
// Instead of this:
import { someFunction } from '../../utils/helpers';

// You can use:
import { someFunction } from '@/utils/helpers';
```

## Best Practices

- Use TypeScript's strict mode for maximum type safety
- Define interfaces for object shapes
- Use type annotations for function parameters and return types
- Leverage generics for reusable code
- Use union and intersection types for complex type relationships
- Write unit tests for your functions
- Use path aliases for cleaner imports
- Follow consistent naming conventions

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Vite Documentation](https://vite.dev/guide/)
- [Vitest Documentation](https://vitest.dev/guide/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
