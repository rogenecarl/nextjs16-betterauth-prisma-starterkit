import { RegisterProviderForm } from "@/components/auth/register-provider-form"

export default function SignupProviderPage() {
    return (
        <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
            {/* Left Column: Form */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-white dark:bg-[#0B0F19]">
                <div className="w-full max-w-[450px]">
                    <RegisterProviderForm />
                </div>
            </div>

            {/* Right Column: Visual/Marketing */}
            <div className="relative hidden lg:flex h-full w-full flex-col justify-between overflow-hidden bg-slate-950 p-12 text-white">
                
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-950" />
                    {/* Glowing Orbs - Sky/Cyan Theme for Trust/Medical */}
                    <div className="absolute -top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-sky-600/20 blur-[100px]" />
                    <div className="absolute bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[100px]" />
                    <div className="absolute -bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-900/40 blur-[80px]" />
                    
                    {/* Technical Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
                    
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
                </div>

                {/* Branding */}
                <div className="relative z-10 flex items-center gap-3 text-lg font-medium tracking-tight animate-in fade-in slide-in-from-top-4 duration-700">
                    <span className="font-bold text-xl">Himsog</span>
                </div>

                {/* Provider Benefits Showcase */}
                <div className="relative z-10 my-auto flex flex-col gap-10 max-w-[500px]">
                     <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Grow your practice with Himsog.
                        </h2>
                        <p className="text-lg text-slate-400">
                            Get discovered on the map, manage your services and schedule, and connect with patients seamlessly.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Benefit Card 1 */}
                        <div className="col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-600/5 p-6 border border-sky-500/10 hover:border-sky-500/20 transition-all animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                             <div className="mb-4 inline-flex rounded-lg bg-sky-500/20 p-3 text-sky-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                             </div>
                             <h3 className="mb-2 font-semibold text-white">Map Visibility</h3>
                             <p className="text-sm text-slate-400">Appear on the Himsog map so patients in your area can easily find your clinic and services.</p>
                        </div>

                         {/* Benefit Card 2 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-colors animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                             <div className="mb-4 inline-flex rounded-lg bg-cyan-500/20 p-3 text-cyan-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                    <line x1="16" x2="16" y1="2" y2="6"/>
                                    <line x1="8" x2="8" y1="2" y2="6"/>
                                    <line x1="3" x2="21" y1="10" y2="10"/>
                                </svg>
                             </div>
                             <h3 className="mb-2 font-semibold text-white">Schedule Control</h3>
                             <p className="text-sm text-slate-400">Manage operating hours and appointments.</p>
                        </div>

                        {/* Benefit Card 3 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-colors animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
                             <div className="mb-4 inline-flex rounded-lg bg-blue-500/20 p-3 text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M3 3v18h18"/>
                                    <path d="m19 9-5 5-4-4-3 3"/>
                                </svg>
                             </div>
                             <h3 className="mb-2 font-semibold text-white">Analytics Dashboard</h3>
                             <p className="text-sm text-slate-400">Track your performance.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Metadata */}
                <div className="relative z-10 flex justify-between text-xs text-slate-500">
                   <p>© 2024 Himsog Inc.</p>
                   <p>Trusted by <span className="text-white">500+</span> Clinics</p>
                </div>
            </div>
        </div>
    )
}