# Scrum Team Site

This guide helps Scrum team members run the project locally after cloning the repository.

## Requirements

- [Node.js](https://nodejs.org/) with npm. Use the version recommended by the team if one has been specified.
- Git, to clone the repository.

You can check that Node.js and npm are installed by running:

```sh
node --version
npm --version
```

## Set up and run the site

The application is inside the `scrum-team-site` folder. From a terminal, go to the folder where you cloned the repository, then run:

```sh
cd scrum-team-site
npm install
npm run dev
```

Vite prints a local URL in the terminal (commonly `http://localhost:5173/`). Open that URL in a browser. Keep the terminal running while you work; press `Ctrl+C` to stop the development server.

If the repository includes `package-lock.json`, `npm ci` is also a good choice for a clean install that follows the checked-in lockfile:

```sh
npm ci
```

Use either `npm install` or `npm ci` for setup, not both. If `npm ci` reports a lockfile mismatch, use `npm install` and coordinate any resulting lockfile changes with the team.

## Useful npm commands

Run these from inside `scrum-team-site`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite's local development server. |
| `npm run build` | Build the production version of the site. |
| `npm run preview` | Preview the production build locally after building. |
| `npm run lint` | Check the code with ESLint, if this script is defined. |

The available scripts are defined in `package.json` under `scripts`. If a command reports “Missing script,” check that section and ask the team which script to use; script names can vary by project.

## Project layout

The repository has a top-level project folder and the app itself in `scrum-team-site`:

```text
repository/
├── README.md
├── LICENSE
└── scrum-team-site/
    ├── public/              Static files served as-is (for example, team images)
    ├── src/
    │   ├── pages/           Page-level components and screens
    │   ├── App.jsx           Main app component and page composition
    │   ├── App.css           App-level styles
    │   ├── index.css         Global styles
    │   └── main.jsx          React entry point; mounts the app
    ├── index.html            HTML page used by Vite
    ├── package.json          Dependencies and npm scripts
    ├── package-lock.json     Locked dependency versions
    ├── vite.config.js        Vite configuration
    └── eslint.config.js      ESLint configuration
```

When adding or changing a screen, start by looking in `src/pages`. `App.jsx` is where the app brings its screens and shared layout together. Put files that should be served directly, such as images, in `public`; use paths from the site root when referencing them. Keep reusable styles in the existing CSS files or alongside components according to the team's conventions.

## Common setup issues

- **`npm` is not recognized:** Install Node.js, then close and reopen the terminal so it picks up the updated PATH.
- **Dependencies or install errors:** Confirm you are inside `scrum-team-site` and that the team is using a supported Node.js version. If a `node_modules` folder is in a broken state, remove it and run `npm ci` again.
- **Port already in use:** Vite will usually offer another available port in the terminal. Open the URL it prints.
- **A script is missing:** Check `package.json` → `scripts`; use only commands listed there.
