import { RegisterProviderForm } from "@/components/auth/register-provider-form"

export default function SignupProviderPage() {
    return (
        <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
            {/* Left Column: Visual/Marketing */}
            <div className="relative hidden lg:flex min-h-screen h-full w-full flex-col items-center justify-between overflow-hidden bg-slate-950 p-12 text-white">

                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-950" />
                    {/* Glowing Orbs - Sky/Cyan Theme */}
                    <div className="absolute -top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-sky-600/20 blur-[100px]" />
                    <div className="absolute bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[100px]" />
                    <div className="absolute -bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-900/40 blur-[80px]" />

                    {/* Technical Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
                </div>

                {/* Branding */}
                <div className="relative z-10 w-full flex items-center gap-3 text-lg font-medium tracking-tight animate-in fade-in slide-in-from-top-4 duration-700">
                    <span className="font-bold text-xl">StarterKit</span>
                </div>

                {/* Contributor Benefits Showcase */}
                <div className="relative z-10 my-auto flex flex-col gap-10 max-w-[500px]">
                    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Join our contributor team.
                        </h2>
                        <p className="text-lg text-slate-400">
                            Help build the future of web development. Contribute components, fix bugs, and shape the roadmap.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Benefit Card 1 */}
                        <div className="col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-600/5 p-6 border border-sky-500/10 hover:border-sky-500/20 transition-all animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                            <div className="mb-4 inline-flex rounded-lg bg-sky-500/20 p-3 text-sky-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="3" y1="12" x2="9" y2="12" />
                                    <line x1="15" y1="12" x2="21" y2="12" />
                                    <path d="M12 3v18" />
                                </svg>
                            </div>
                            <h3 className="mb-2 font-semibold text-white">Open Source Impact</h3>
                            <p className="text-sm text-slate-400">Your contributions help thousands of developers build better applications faster.</p>
                        </div>

                        {/* Benefit Card 2 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-colors animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                            <div className="mb-4 inline-flex rounded-lg bg-cyan-500/20 p-3 text-cyan-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </div>
                            <h3 className="mb-2 font-semibold text-white">GitHub Access</h3>
                            <p className="text-sm text-slate-400">Direct access to repo and team discussions.</p>
                        </div>

                        {/* Benefit Card 3 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-colors animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
                            <div className="mb-4 inline-flex rounded-lg bg-blue-500/20 p-3 text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="mb-2 font-semibold text-white">Team Collaboration</h3>
                            <p className="text-sm text-slate-400">Work with talented developers worldwide.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Metadata */}
                <div className="relative z-10 w-full flex justify-between text-xs text-slate-500">
                    <p>© 2024 StarterKit. MIT License.</p>
                    <p>Trusted by <span className="text-white">200+</span> Contributors</p>
                </div>
            </div>
            {/* Right Column: Form */}
            <div className="min-h-screen flex items-center justify-center p-8 lg:p-12 bg-white dark:bg-[#0B0F19]">
                <div className="w-full max-w-[450px]">
                    <RegisterProviderForm />
                </div>
            </div>
        </div>
    )
}
