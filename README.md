# Md. Musfiqur Rahman — Portfolio

A responsive personal portfolio presenting my background as a Computer Science and Engineering undergraduate, selected projects, technical interests, research work, and education.

**Live site:** [musfiqurrahmanse-hash.github.io/musfiqur-rahman-portfolio](https://musfiqurrahmanse-hash.github.io/musfiqur-rahman-portfolio/)

## Overview

This project is a single-page portfolio designed to make profile information and project work easy to explore. Content is maintained in reusable data structures so that projects, skills, research entries, and other sections can be updated without rebuilding the page layout.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Sections for introduction, about, skills, projects, research, datasets, education, and contact
- Category filtering for project cards
- Links to professional and developer profiles
- Reusable components and centralized portfolio content
- Keyboard-aware, semantic UI patterns and reduced-motion-conscious interactions
- Static build configured for GitHub Pages deployment

## Technology stack

- **React** and **TypeScript**
- **TanStack Start** and **TanStack Router**
- **Vite**
- **Tailwind CSS**
- **Lucide React** icons
- **Bun** for dependency installation and scripts

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Git](https://git-scm.com/) installed

### Install and run locally

```bash
git clone https://github.com/musfiqurrahmanse-hash/musfiqur-rahman-portfolio.git
cd musfiqur-rahman-portfolio
bun install
bun run dev
```

Open the local URL printed in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the local development server |
| `bun run build` | Build the application |
| `bun run build:dev` | Build using development mode |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Format files with Prettier |
| `bun run test` | Run the test suite |
| `bun run test:watch` | Run tests in watch mode |

## Updating portfolio content

Portfolio information is organized in the source content module:

- `src/content/portfolio.ts` — profile details, social links, interests, skills, projects, research, datasets, education, certifications, and achievements.

Update the relevant entries there when adding or editing content. Keep descriptions accurate and only include technologies, dates, credentials, and outcomes that can be verified.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. When changes are pushed to `main`, the workflow installs dependencies, builds and prerenders the site, then publishes the static output to GitHub Pages.

Check the [Actions tab](https://github.com/musfiqurrahmanse-hash/musfiqur-rahman-portfolio/actions) to review build and deployment status.

The Vite configuration uses the repository path as the public base URL. If the repository is renamed, update the base path in `vite.config.ts` and the deployment configuration as needed.

## Repository structure

```text
src/
  components/       Reusable interface components
  content/          Portfolio content and data
  routes/           TanStack Router routes
  styles.css        Global styles
.github/
  workflows/
    deploy.yml      GitHub Pages build and deployment
```

## Contact and profiles

- [GitHub](https://github.com/Musfiq53062)
- [LinkedIn](https://www.linkedin.com/in/md-musfiqur-rahman-060623248/)
- [ResearchGate](https://www.researchgate.net/profile/Md-Musfiqur-Rahman-12)

## Maintenance notes

- Keep portfolio content centralized and consistent with the actual projects.
- Test locally with `bun run dev` and run `bun run build` before publishing significant changes.
- Do not commit credentials, API keys, or other secrets to the repository.
