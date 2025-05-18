# React and TypeScript Learning Playground

This monorepo is designed with pnpm workspaces and contains multiple projects for learning and exploring React and TypeScript worlds.

## Repository Structure

- `projects/react-ts`: React with TypeScript projects
- `projects/typescript`: Pure TypeScript projects for language practice
- `projects/server`: Backend server implementations
- `projects/libs`: Reusable libraries and utilities

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/) (v10.6.5 or compatible version)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd trainee-assessment
```

### 2. Install Dependencies

This project uses pnpm workspaces to manage dependencies across multiple projects.

```bash
# Install pnpm if you don't have it already
npm install -g pnpm@10.6.5

# Install all dependencies
pnpm install
```

### 3. Project Navigation

Each project in the `projects` directory is a standalone application or library. You can navigate to any project and run it individually:

```bash
# Navigate to a specific project
cd projects/react-ts/<project-name>

# Start the development server (for React projects)
pnpm dev

# Or for TypeScript projects, you might run
pnpm start
```

## Working with Projects

### React + TypeScript Projects

The `projects/react-ts` directory contains various React applications built with TypeScript. Each project demonstrates different concepts and patterns.

To start a React project:

```bash
cd projects/react-ts/
pnpm dev
```

### TypeScript Projects

The `projects/typescript` directory contains pure TypeScript projects for practicing TypeScript concepts.

To run a TypeScript project:

```bash
cd projects/typescript/
pnpm start
```

### Server Projects

The `projects/server` directory contains backend implementations that can be used with the frontend projects. It mainly includes `json-server` to provide a mock server but can be extended with other libraries.

To start a server:

```bash
cd projects/server/
pnpm start
```

## Code Quality Tools

This monorepo is configured with several code quality tools to ensure consistent code style and catch errors early in the development process.

### Git Hooks with Husky

We use [Husky](https://typicode.github.io/husky/) to manage Git hooks. The following hooks are configured:

- **pre-commit**: Runs linting and type checking on staged files before committing

### Lint-Staged

[Lint-staged](https://github.com/okonet/lint-staged) runs linters and formatters on files that are staged for commit. Configuration includes:

- ESLint for JavaScript files in the following projects:
  - `projects/react-js/**/*.{js,jsx}`
  - `projects/javascript/**/*.{js,jsx}`
- Prettier for formatting these file types across all projects:
  - `projects/**/*.{json,css,md}`

### Available Scripts

The following scripts are available at the root level:

```bash
# Run tests across all projects
pnpm test

# Run linting on React.js and React TypeScript projects
pnpm lint

# Fix linting issues across projects with lint:fix configured
pnpm lint:fix

# Build all projects
pnpm build

# Run type checking for TypeScript projects only
pnpm type-check
```

### ESLint Configuration

The JavaScript projects (especially the react-js project) include an enhanced ESLint configuration with:

- Support for modern React (no need to import React for JSX)
- Special configuration for test files with Jest globals
- React hooks linting rules
- Import organization rules
- Accessibility (a11y) guidelines

Type checking is handled separately from linting and only runs on TypeScript projects.

## Creating a New Project

The projects are created using [vite](https://vite.dev/guide/)
You can create a new project within the monorepo:

### React + TypeScript Project

```bash
# Navigate to the react-ts directory
cd projects/react-ts

# Create a new project using Vite
pnpm create vite my-new-project --template react-ts

# Navigate to your new project
cd my-new-project

# Install dependencies
pnpm install
```

### TypeScript Project

```bash
# Navigate to the typescript directory
cd projects/typescript

# Create a new directory for your project
mkdir my-ts-project
cd my-ts-project

# Initialize a new package
pnpm init

# Add TypeScript
pnpm add -D typescript @types/node

# Create a tsconfig.json file
npx tsc --init
```

## Reports

The directory reports is created to document all the pdf, txt, doc, markdown, etc files prepared as reports to be submitted and reviewed. Sub directories can be created
for filename specific documents.

```
   reports/
  ├── pdf/           # sub directory for PDF files
  ├── doc/           # sub directory for docs
  ├── json/          # sub directory for json files
  └── ...            # any other as required!
```

## Troubleshooting

### Common Issues

1. **Module not found errors**: Make sure all dependencies are installed by running `pnpm install` in the root directory.

2. **TypeScript errors**: Check your `tsconfig.json` settings and ensure you're using the correct types.

3. **Workspace package not found**: Ensure your `pnpm-workspace.yaml` is correctly configured and you've run `pnpm install` in the root directory.

### Updating Dependencies

To update all dependencies across the monorepo:

```bash
pnpm update -r
```

## Contributing

Feel free to add your own projects to the appropriate directories. Make sure to follow the existing structure and naming conventions.

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [pnpm Workspaces](https://pnpm.io/workspaces)

## Best Practices

Please read [best practices](best-practices.md) and [code review](code-review.md) for more information.
