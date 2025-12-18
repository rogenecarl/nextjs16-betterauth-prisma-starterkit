import { LoginInForm } from "@/components/auth/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
            {/* Left Column: Visual/Marketing */}
            <div className="relative hidden lg:flex min-h-screen h-full w-full flex-col items-center justify-between overflow-hidden bg-slate-950 p-12 text-white">

                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-950" />
                    {/* Glowing Orbs */}
                    <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[100px]" />
                    <div className="absolute top-[30%] right-[10%] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[80px]" />
                    <div className="absolute -bottom-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[100px]" />

                    {/* Technical Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
                </div>

                {/* Branding */}
                <div className="relative z-10 w-full flex items-center gap-3 text-lg font-medium tracking-tight animate-in fade-in slide-in-from-top-4 duration-700">
                    <span className="font-bold text-xl">StarterKit</span>
                </div>

                {/* Feature Showcase */}
                <div className="relative z-10 my-auto flex flex-col gap-8 max-w-[500px]">
                    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Build production-ready apps faster.
                        </h2>
                        <p className="text-lg text-slate-400">
                            Sign in to access your dashboard, manage your projects, and explore the full starter kit features.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {/* Feature 1 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-colors border border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Secure Authentication</h3>
                                    <p className="text-sm text-slate-400">Better Auth with email, OAuth, and role-based access control.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-colors border border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                        <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Type-Safe Database</h3>
                                    <p className="text-sm text-slate-400">Prisma 7 ORM with PostgreSQL for reliable data management.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-colors border border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Beautiful UI Components</h3>
                                    <p className="text-sm text-slate-400">shadcn/ui with Tailwind CSS 4 and dark mode support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Metadata */}
                <div className="relative z-10 w-full flex justify-between text-xs text-slate-500">
                    <p>© 2024 StarterKit. MIT License.</p>
                    <p>Next.js 16 • React 19 • TypeScript</p>
                </div>
            </div>

            {/* Right Column: Form*/}
            <div className="min-h-screen flex items-center justify-center p-8 lg:p-12 bg-white dark:bg-[#0B0F19]">
                <div className="w-full max-w-[450px]">
                    <LoginInForm />
                </div>
            </div>
        </div>
    )
}
