import { LoginInForm } from "@/components/auth/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
            {/* Left Column: Form */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-white dark:bg-[#0B0F19]">
                <div className="w-full max-w-[450px]">
                    <LoginInForm />
                </div>
            </div>

            {/* Right Column: Visual/Marketing */}
            <div className="relative hidden lg:flex h-full w-full flex-col justify-between overflow-hidden bg-slate-950 p-12 text-white">
                
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
                <div className="relative z-10 flex items-center gap-3 text-lg font-medium tracking-tight animate-in fade-in slide-in-from-top-4 duration-700">
                    <span className="font-bold text-xl">Himsog</span>
                </div>

                {/* Feature Showcase (Replaces Testimonial) */}
                <div className="relative z-10 my-auto flex flex-col gap-8 max-w-[500px]">
                    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Find healthcare providers near you.
                        </h2>
                        <p className="text-lg text-slate-400">
                            Sign in to discover providers on the map, manage your appointments, and message your healthcare team.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {/* Feature 1 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-colors border border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Map-Based Discovery</h3>
                                    <p className="text-sm text-slate-400">Locate clinics, doctors, and specialists in your area.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-colors border border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                        <line x1="16" x2="16" y1="2" y2="6"/>
                                        <line x1="8" x2="8" y1="2" y2="6"/>
                                        <line x1="3" x2="21" y1="10" y2="10"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Appointment Management</h3>
                                    <p className="text-sm text-slate-400">Book, reschedule, and track your healthcare visits.</p>
                                </div>
                            </div>
                        </div>

                         {/* Feature 3 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-colors border border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
                             <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Direct Messaging</h3>
                                    <p className="text-sm text-slate-400">Communicate securely with your healthcare providers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Metadata */}
                <div className="relative z-10 flex justify-between text-xs text-slate-500">
                   <p>© 2024 Himsog Inc.</p>
                   <p>System Status: <span className="text-emerald-400">Operational</span></p>
                </div>
            </div>
        </div>
    )
}