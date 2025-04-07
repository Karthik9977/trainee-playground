# JSON Server API

This project provides a mock REST API using [json-server](https://github.com/typicode/json-server). It includes sample data for users, posts, comments, and profiles, making it perfect for frontend development and testing without needing a real backend.

## Features

- **Zero-config** - No setup required, just start the server
- **Full REST API** - GET, POST, PUT, PATCH, DELETE verbs supported
- **Filtering, sorting, and pagination** - Built-in query parameters
- **Custom routes** - Define your own API paths
- **Configurable delay** - Simulate network latency

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v10.6.5 or compatible)

### Installation

No additional installation is needed as the dependencies are managed through the workspace.

### Running the Server

You can start the server using one of the following commands:

```bash
# Navigate to the server directory
cd projects/server

# Start the server
pnpm start

# Start with a 1-second delay (simulates network latency)
pnpm start:delay

# Start with custom routes
pnpm start:routes
```

The server will run at http://localhost:3000 by default.

## Available Data

The mock database (`db.json`) includes the following data models:

### Users
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin"
}
```

### Posts
```json
{
  "id": 1,
  "title": "Getting Started with JSON Server",
  "author": "John Doe",
  "content": "JSON Server is a great tool for mocking APIs during development.",
  "userId": 1,
  "tags": ["api", "development", "tutorial"],
  "createdAt": "2025-03-15T10:00:00Z"
}
```

### Comments
```json
{
  "id": 1,
  "postId": 1,
  "userId": 2,
  "content": "Great post! Very helpful.",
  "createdAt": "2025-03-16T11:20:00Z"
}
```

### Profiles
```json
{
  "id": 1,
  "userId": 1,
  "bio": "Full-stack developer with 10 years of experience",
  "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
  "location": "San Francisco, CA"
}
```

## API Endpoints

### Standard Endpoints

#### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `PATCH /users/:id` - Partially update a user
- `DELETE /users/:id` - Delete a user

#### Posts
- `GET /posts` - Get all posts
- `GET /posts/:id` - Get a specific post
- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update a post
- `PATCH /posts/:id` - Partially update a post
- `DELETE /posts/:id` - Delete a post

#### Comments
- `GET /comments` - Get all comments
- `GET /comments/:id` - Get a specific comment
- `POST /comments` - Create a new comment
- `PUT /comments/:id` - Update a comment
- `PATCH /comments/:id` - Partially update a comment
- `DELETE /comments/:id` - Delete a comment

#### Profiles
- `GET /profiles` - Get all profiles
- `GET /profiles/:id` - Get a specific profile
- `POST /profiles` - Create a new profile
- `PUT /profiles/:id` - Update a profile
- `PATCH /profiles/:id` - Partially update a profile
- `DELETE /profiles/:id` - Delete a profile

### Custom Routes

When using `pnpm start:routes`, the following custom routes are available:

- `/api/*` → Maps to `/*` (adds an `/api` prefix to all routes)
- `/users/:id/profile` → Maps to `/profiles?userId=:id` (get profile for a user)
- `/users/:id/posts` → Maps to `/posts?userId=:id` (get posts by a user)
- `/posts/:id/comments` → Maps to `/comments?postId=:id` (get comments for a post)
- `/blog/:id` → Maps to `/posts/:id` (alternative route for posts)

## Query Parameters

JSON Server supports various query parameters for filtering, sorting, and pagination:

### Filtering

```
# Get all posts with the tag "api"
GET /posts?tags_like=api

# Get all users with admin role
GET /users?role=admin

# Full-text search in posts
GET /posts?q=REST
```

### Sorting

```
# Sort posts by creation date (ascending)
GET /posts?_sort=createdAt

# Sort users by name (descending)
GET /users?_sort=name&_order=desc
```

### Pagination

```
# Get the first page with 10 items per page
GET /posts?_page=1&_limit=10
```

### Relationships

```
# Get posts with their author details expanded
GET /posts?_expand=user

# Get users with their posts
GET /users?_embed=posts
```

## Usage Examples

### Fetching Data with JavaScript

```javascript
// Get all users
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => console.log(data));

// Get a specific post
fetch('http://localhost:3000/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));

// Get all comments for a post using custom route
fetch('http://localhost:3000/posts/1/comments')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Creating Data

```javascript
fetch('http://localhost:3000/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    author: 'John Doe',
    content: 'This is a new post.',
    userId: 1,
    tags: ['new', 'post'],
    createdAt: new Date().toISOString()
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

### Updating Data

```javascript
fetch('http://localhost:3000/users/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Updated'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

### Deleting Data

```javascript
fetch('http://localhost:3000/comments/1', {
  method: 'DELETE'
})
.then(response => response.json())
.then(() => console.log('Comment deleted'));
```

## Modifying the Database

You can modify the `db.json` file to add, remove, or change the mock data. The server will automatically reload when changes are detected.

## Resources

- [JSON Server Documentation](https://github.com/typicode/json-server)
- [RESTful API Design](https://restfulapi.net/)
- [HTTP Status Codes](https://httpstatuses.com/)
