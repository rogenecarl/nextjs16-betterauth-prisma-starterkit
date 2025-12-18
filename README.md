# Next.js 16 + Better Auth + Prisma 7 Starter Kit

A production-ready authentication starter kit built with the latest Next.js 16, Better Auth, and Prisma 7. Features role-based access control, Google OAuth, and a clean, scalable architecture.

**[Live Demo](https://nextjs16-betterauth-prisma-starterk.vercel.app/)**

---

## Features

- **Next.js 16** with App Router and React 19
- **Better Auth** for authentication (email/password + Google OAuth)
- **Prisma 7** with PostgreSQL (using driver adapters)
- **Role-Based Access Control** (USER, ADMIN, PROVIDER)
- **Route Protection** with optimistic proxy (Next.js 16+ feature)
- **TanStack Query** for client-side data fetching
- **Zod 4** for form validation
- **Tailwind CSS 4** with shadcn/ui components
- **Rate Limiting** built-in for auth endpoints
- **Session Cookie Caching** for reduced database calls
- **Cross-Tab Sign Out Sync**
- **TypeScript** throughout

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 |
| Authentication | Better Auth |
| Database ORM | Prisma 7 |
| Database | PostgreSQL |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Forms | React Hook Form + Zod 4 |
| Data Fetching | TanStack Query |
| Language | TypeScript |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- PostgreSQL database (see [Database Providers](#database-providers))

### 1. Clone the Repository

```bash
git clone https://github.com/rogenecarl/nextjs16-betterauth-prisma-starterkit.git
cd nextjs16-betterauth-prisma-starterkit
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Database (PostgreSQL connection string)
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"

# Better Auth
BETTER_AUTH_SECRET="generate-a-strong-secret-at-least-32-characters"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Generate a secure secret:

```bash
openssl rand -base64 32
```

### 4. Set Up the Database

Generate the Prisma client and push the schema to your database:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (creates tables)
npx prisma db push
```

Or create a migration for version control:

```bash
npx prisma migrate dev --name init
```

### 5. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Database Providers

This starter kit supports multiple PostgreSQL providers. Update your `DATABASE_URL` accordingly:

### Neon (Recommended for Vercel)

```env
DATABASE_URL="postgresql://user:pass@ep-xxx-pooler.region.aws.neon.tech/dbname?sslmode=require"
```

### Supabase

```env
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres"
```

### Railway

```env
DATABASE_URL="postgresql://postgres:[password]@[host].railway.app:5432/railway"
```

### Render

```env
DATABASE_URL="postgresql://user:pass@[host].render.com:5432/dbname?sslmode=require"
```

### Self-Hosted / Docker

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"
```

---

## Project Structure

```
src/
├── actions/auth/         # Server actions (signIn, signUp, signUpProvider)
├── app/
│   ├── (auth)/           # Auth pages (login, register, register-provider)
│   ├── (landing)/        # Landing page
│   ├── (user)/           # User dashboard (protected)
│   ├── admin/            # Admin dashboard (protected)
│   ├── provider/         # Provider dashboard (protected)
│   └── api/auth/         # Better Auth API routes
├── components/
│   ├── auth/             # Auth components (forms, guards)
│   └── ui/               # shadcn/ui components
├── config/
│   └── auth.ts           # Centralized auth config (role redirects)
├── context/              # React Query provider
├── hooks/                # Custom hooks (useAuth, useRequireAuth)
├── lib/
│   ├── generated/prisma/ # Prisma client (auto-generated)
│   ├── auth.ts           # Better Auth server config
│   ├── auth-client.ts    # Better Auth React client
│   ├── auth-server.ts    # Server-side auth helpers
│   └── db.ts             # Prisma singleton
├── schema/               # Zod validation schemas
├── types/                # TypeScript types
└── proxy.ts              # Route protection (optimistic)
```

---

## Authentication

### User Roles

Three roles are available out of the box:

| Role | Dashboard | Description |
|------|-----------|-------------|
| `USER` | `/dashboard` | Default role for regular users |
| `ADMIN` | `/admin/dashboard` | Administrative access |
| `PROVIDER` | `/provider/dashboard` | Service provider access |

### Auth Pages

- `/login` - Sign in with email/password or Google
- `/register` - User registration
- `/register-provider` - Provider registration
- `/choose-role` - Role selection (if applicable)

### Server-Side Helpers

```typescript
// In Server Components
import { requireAuth, requireRole, getServerSession } from "@/lib/auth-server"

// Require authentication
export default async function ProtectedPage() {
  const session = await requireAuth()
  return <div>Hello {session.user.name}</div>
}

// Require specific role
export default async function AdminPage() {
  const session = await requireRole("ADMIN")
  return <div>Admin Panel</div>
}
```

### Client-Side Hooks

```typescript
// In Client Components
import { useAuth } from "@/hooks"

export function MyComponent() {
  const { user, isAuthenticated, isAdmin, signOut, isPending } = useAuth()

  if (isPending) return <Loading />
  if (!isAuthenticated) return <LoginPrompt />

  return <div>Hello {user.name}</div>
}
```

### Auth Guard Components

```tsx
import { AuthGuard, AdminOnly, ProviderOnly, UserOnly } from "@/components/auth/auth-guard"

// Basic authentication guard
<AuthGuard fallback={<Loading />}>
  <ProtectedContent />
</AuthGuard>

// Role-specific guards
<AdminOnly>
  <AdminPanel />
</AdminOnly>

<ProviderOnly>
  <ProviderDashboard />
</ProviderOnly>
```

---

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID
3. Add authorized redirect URI: `{YOUR_APP_URL}/api/auth/callback/google`
4. Copy the Client ID and Client Secret to your `.env` file

---

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Database
npx prisma generate              # Regenerate Prisma client
npx prisma migrate dev --name    # Create migration
npx prisma db push               # Push schema changes
npx prisma studio                # Open Prisma Studio GUI
```

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

The `postinstall` script automatically runs `prisma generate` during deployment.

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `DATABASE_URL` - Your production PostgreSQL connection string
- `BETTER_AUTH_SECRET` - A strong, unique secret (different from development)
- `BETTER_AUTH_URL` - Your production URL (e.g., `https://yourdomain.com`)
- `NEXT_PUBLIC_APP_URL` - Same as `BETTER_AUTH_URL`
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret

---

## Customization

### Adding a New Role

1. Update the `UserRole` enum in `prisma/schema.prisma`:

```prisma
enum UserRole {
  USER
  ADMIN
  PROVIDER
  MODERATOR  // Add new role
}
```

2. Run `npx prisma db push` or create a migration

3. Add the role redirect in `src/config/auth.ts`:

```typescript
export const ROLE_REDIRECTS: Record<Role, string> = {
  ADMIN: "/admin/dashboard",
  PROVIDER: "/provider/dashboard",
  USER: "/dashboard",
  MODERATOR: "/moderator/dashboard",  // Add redirect
}
```

4. Update `src/proxy.ts` if needed for route protection

### Adding Social Providers

Better Auth supports multiple OAuth providers. Add them in `src/lib/auth.ts`:

```typescript
socialProviders: {
  google: { ... },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  },
}
```

---

## Rate Limiting

Built-in rate limiting protects auth endpoints:

| Endpoint | Window | Max Requests |
|----------|--------|--------------|
| `/sign-in/email` | 5 min | 5 |
| `/sign-up/email` | 5 min | 5 |
| `/forget-password` | 5 min | 3 |
| `/reset-password` | 5 min | 5 |
| `/get-session` | 1 min | 20 |

Configure in `src/lib/auth.ts`.

---

## Author

**Rogene Carl**
- GitHub: [@rogenecarl](https://github.com/rogenecarl)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Better Auth](https://better-auth.com/)
- [Prisma](https://prisma.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query)
