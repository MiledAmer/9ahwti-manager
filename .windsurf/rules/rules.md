---
trigger: always_on
---

Project Profile
Framework: Next.js ^15 (App Router) with React ^19
Language: TypeScript
Styling: Tailwind CSS v4
ORM: Prisma
Auth: @clerk/nextjs present (env keys required if enabled)
Package manager: pnpm@10.12.4
Entry points: 
src/app/layout.tsx
, 
src/app/page.tsx
, 
src/app/manifest.ts
Command Rules
Use pnpm for all scripts
Dev: pnpm dev (Next dev with Turbo)
Build: pnpm build
Start preview: pnpm preview (build then start) or pnpm start (if already built)
Lint: pnpm lint | Fix: pnpm lint:fix
Format check: pnpm format:check | Write: pnpm format:write
Typecheck: pnpm typecheck
Prisma:
Generate client: runs on postinstall automatically; manually: pnpm prisma generate
Local dev migrations: pnpm db:generate (runs prisma migrate dev)
Deploy migrations: pnpm db:migrate (runs prisma migrate deploy)
DB push (no migrations): pnpm db:push
Studio: pnpm db:studio
Do not auto-run destructive DB commands
Require explicit user approval for: db:generate, db:migrate, db:push
Never run on CI without DATABASE_URL set
Environment & Secrets
Required to run:
DATABASE_URL (Prisma)
Likely required (if Clerk is used in code):
CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
Rule: Never commit .env. Read from .env locally; validate with @t3-oss/env-nextjs if present.
File/Directory Conventions
Routing: Use Next App Router under 
src/app/
Pages and route handlers live in src/app/...
Maintain root layout in 
src/app/layout.tsx
Home route is 
src/app/page.tsx
PWA data in 
src/app/manifest.ts
Components: Place shared components in src/components/ (e.g., src/components/ui/)
Hooks/Lib: Keep utilities in src/lib/ and hooks in src/hooks/
Prisma schema: prisma/schema.prisma is source of truth for DB
Static assets: public/ for icons/assets
Code Style & Quality
Formatting: Prettier + prettier-plugin-tailwindcss
Run pnpm format:write before commits
Linting: ESLint (eslint, eslint-config-next)
Run pnpm lint and fix with pnpm lint:fix
Types: Strict TypeScript; ensure pnpm typecheck passes
Tailwind: Tailwind v4 with PostCSS; follow utility-first conventions and tw-animate-css where appropriate
Performance & Build
Next.js 15: Prefer App Router patterns, Server Components by default
Images/Fonts: Use Next optimizations where possible
Build artifacts: Don’t commit .next/ or node_modules/
Protected Files (do not edit without approval)
prisma/schema.prisma
package.json
, pnpm-lock.yaml
src/app/layout.tsx
, 
src/app/page.tsx
, 
src/app/manifest.ts
Configs: next.config.js, postcss.config.js, tailwind.config.* (if present), tsconfig.json, eslint.config.js, prettier.config.js
Safe vs Unsafe Operations
Safe (no approval):
pnpm dev, pnpm build, pnpm start, pnpm preview
pnpm lint, pnpm format:check, pnpm typecheck
Require approval:
Any Prisma migration or schema push: pnpm db:generate, pnpm db:migrate, pnpm db:push
Dependency changes: pnpm add, pnpm remove, pnpm update
Editing protected files listed above
How to Run Locally (Windows)
Install PNPM 10: corepack enable then corepack prepare pnpm@10.12.4 --activate
Install deps: pnpm install
Ensure .env has DATABASE_URL (and Clerk keys if used)
Generate Prisma client (auto on install) or run: pnpm prisma generate
Start dev server: pnpm dev
Assistant Behavior
Prefer minimal, focused changes within 
src/app/
 and src/components/
Ask before creating new routes or changing layout structure
When adding data models, update prisma/schema.prisma, then propose migration plan
Always run pnpm typecheck and pnpm lint before suggesting a commit