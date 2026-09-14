# Git Flow Lab

A lightweight web sandbox designed to practice Git Flow branching strategies, featuring a semantic HTML5 structure, production-ready minified CSS, and an accessible interface.

## Tech Stack
- **Markup**: Semantic HTML5 (Fully linted)
- **Styling**: Minified CSS Custom Properties (Indigo & Slate modern palette)
- **Interactions**: Vanilla JavaScript

## Features

### Semantic Navigation
The global header utilizes a `<nav>` container paired with an unordered list (`<ul>`) for perfect screen-reader accessibility and clean routing hooks.

### Dark Theme Toggle
The application includes a real-time dark theme toggle located inside the global navigation bar.
- **Interaction**: A `<button id="theme-toggle">` triggers a JavaScript event listener on click.
- **State Management**: JavaScript dynamically flips the `data-theme="dark"` attribute directly on the `<body>` element.
- **Styling**: The UI switches themes using CSS Custom Properties (Variables) targeted via the `body[data-theme="dark"]` attribute selector. Transitions are applied smoothly over `0.3s`.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Open `index.html` directly in your browser or run a local development server.


