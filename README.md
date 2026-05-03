# Personal Project Showcase App

A React app for adding, viewing, searching, and deleting personal projects.

## Features

- **Add projects** — fill in a title and description then click Add to create a project card
- **Delete projects** — click the ✕ button on any card to remove it
- **Search projects** — filter cards in real time by title using the search box
- **Responsive design** — layout adapts for desktop, tablet (≤768px), and mobile (≤480px)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Install dependencies

```bash
cd project_showcase
npm install
```

### Run the app

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically on file changes.

### Run the tests

```bash
npm test
```

Runs the Jest + React Testing Library test suite covering:

- Page rendering
- Adding a project (form submission + input clearing)
- Validation — empty fields are rejected
- Deleting a project card
- Search/filter by title

### Build for production

```bash
npm run build
```

Outputs an optimised production bundle to the `build/` folder.

