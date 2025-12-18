# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server (localhost:3000)
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm start        # Start production server

# Database
npx prisma generate   # Regenerate Prisma client (output: src/lib/generated/prisma)
npx prisma migrate dev --name <name>   # Create and apply migration
npx prisma db push    # Push schema changes without migration
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router (src/app directory)
- **Better Auth** for authentication (email/password + Google OAuth)
- **Prisma 7** with PostgreSQL (using @prisma/adapter-pg driver adapter)
- **TanStack Query** for client-side data fetching
- **Zod 4** for validation
- **Tailwind CSS 4** with shadcn/ui components

### Authentication Flow
- Server auth config: `src/lib/auth.ts` - Better Auth instance with Prisma adapter, rate limiting, and social providers
- Client auth: `src/lib/auth-client.ts` - Better Auth React client with typed exports
- Server helpers: `src/lib/auth-server.ts` - Server-side session helpers (requireAuth, requireRole)
- API route: `src/app/api/auth/[...all]/route.ts` - Catch-all handler
- Rate limiting: Custom in-memory implementation in `src/lib/auth-rate-limit.ts`
- Proxy: `src/proxy.ts` - Optimistic route protection (UX only, not security)

### Auth State Management
Client-side hooks in `src/hooks/`:
- `useAuth()` - Main hook wrapping Better Auth's useSession with derived states (isAdmin, isProvider, isUser) and cross-tab signOut sync
- `useRequireAuth()` - Redirect hook for protected pages with optional role requirement

Server-side helpers in `src/lib/auth-server.ts`:
- `getServerSession()` - Get session in Server Components
- `requireAuth()` - Require auth, redirect if not authenticated
- `requireRole(role)` - Require specific role, redirect if wrong role

Components in `src/components/auth/`:
- `<AuthGuard>` - Conditional rendering based on auth/role
- `<AdminOnly>`, `<ProviderOnly>`, `<UserOnly>` - Role-specific wrappers

### User Roles
Three roles defined in Prisma schema: `USER`, `ADMIN`, `PROVIDER`. Role-based redirects after login (configured in `src/config/auth.ts`):
- ADMIN → `/admin/dashboard`
- PROVIDER → `/provider/dashboard`
- USER → `/dashboard`

### Project Structure
```
src/
├── actions/auth/     # Server actions for auth (signIn, signUp, signUpProvider)
├── app/
│   ├── (auth)/       # Auth pages (login, register, register-provider)
│   ├── (landing)/    # Landing page
│   ├── (user)/       # User dashboard (protected)
│   └── api/auth/     # Better Auth API routes
├── components/
│   ├── auth/         # Auth form + guard components
│   └── ui/           # shadcn/ui components
├── config/
│   └── auth.ts       # Centralized auth config (role redirects, routes)
├── context/          # React Query provider
├── hooks/            # Custom hooks (useAuth, useRequireAuth)
├── lib/
│   ├── generated/prisma/  # Prisma client (auto-generated)
│   ├── auth.ts       # Better Auth server config
│   ├── auth-client.ts    # Better Auth React client
│   ├── auth-server.ts    # Server-side auth helpers
│   ├── auth-rate-limit.ts
│   └── db.ts         # Prisma singleton
├── schema/           # Zod schemas (user.schema.ts)
├── types/            # TypeScript types (ActionResponse, auth types)
└── proxy.ts          # Route protection (optimistic, Next.js 16+)
```

### Patterns
- **Server Actions**: Use `ActionResponse<T>` type from `src/types/api.ts` for consistent return shape
- **Form Validation**: Zod schemas in `src/schema/` shared between client and server
- **Path Alias**: `@/*` maps to `./src/*`
- **Prisma Client**: Generated to `src/lib/generated/prisma`, imported via singleton in `src/lib/db.ts`

### Environment Variables Required
```
DATABASE_URL              # PostgreSQL connection string
GOOGLE_CLIENT_ID          # Google OAuth
GOOGLE_CLIENT_SECRET      # Google OAuth
NEXT_PUBLIC_APP_URL       # App URL (optional, defaults to http://localhost:3000)
```
