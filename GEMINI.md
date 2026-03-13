# GEMINI.md - Project Context: Banane Impressionniste (my-link)

This file provides essential context for Gemini CLI when working within this workspace.

## Project Overview

**Banane Impressionniste** (housed in the `my-profile` directory) is a creative Next.js application that renders an impressionist-style banana using HTML5 Canvas. It demonstrates modern web development practices using the latest versions of Next.js, React, and Tailwind CSS.

### Key Technologies
- **Framework:** Next.js 16.1.6 (App Router)
- **Library:** React 19.2.3
- **Styling:** Tailwind CSS 4.0 (with @tailwindcss/postcss)
- **Language:** TypeScript 5
- **Core Feature:** A custom canvas-based rendering engine in `components/ImpressionistBanana.tsx` that simulates impressionist brushstrokes.

## Directory Structure

- `my-profile/`: The main Next.js application directory.
  - `app/`: Next.js App Router directory (contains `layout.tsx`, `page.tsx`, and `globals.css`).
  - `components/`: React components (e.g., `ImpressionistBanana.tsx`).
  - `public/`: Static assets.
  - `next.config.ts`: Next.js configuration.
  - `package.json`: Project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.

## Building and Running

All commands should be run from within the `my-profile/` directory.

- **Development:** `npm run dev` (starts the development server at http://localhost:3000)
- **Build:** `npm run build` (creates an optimized production build)
- **Production Start:** `npm start` (runs the built application)
- **Linting:** `npm run lint` (runs ESLint checks)

## Development Conventions

- **Next.js App Router:** The project strictly follows the Next.js App Router architecture.
- **Tailwind CSS 4:** Styling is handled via Tailwind CSS 4. Configuration is primarily done through `@tailwindcss/postcss` and CSS variables in `globals.css`.
- **TypeScript:** The project is fully typed. Ensure all new components and logic include proper TypeScript interfaces/types.
- **Canvas Rendering:** The primary visual element is a `canvas` element. Any changes to the banana's appearance should be made within the `animate` loop and `drawStroke` function in `ImpressionistBanana.tsx`.
- **Localization:** The UI currently includes French ("Banane Impressionniste") and Korean descriptions.

## Future Interactions

When assisting with this project:
- Prioritize maintaining the minimalist, artistic aesthetic.
- Be aware of the experimental versions of Next.js and React being used.
- If adding new features, follow the existing pattern of encapsulating complex visual logic into standalone components within the `components/` directory.
