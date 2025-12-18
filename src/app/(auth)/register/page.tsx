import { RegisterUserForm } from "@/components/auth/register-user-form"

export default function SignupUserPage() {
    return (
        <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
            {/* Left Column: Form */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-white dark:bg-[#0B0F19]">
                <div className="w-full max-w-[450px]">
                    <RegisterUserForm />
                </div>
            </div>

            {/* Right Column: Visual/Marketing */}
            <div className="relative hidden lg:flex h-full w-full flex-col justify-between overflow-hidden bg-slate-950 p-12 text-white">
                
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-950" />
                    {/* Glowing Orbs - Emerald/Teal Theme */}
                    <div className="absolute -top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-emerald-600/20 blur-[100px]" />
                    <div className="absolute bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-teal-600/10 blur-[100px]" />
                    <div className="absolute -bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-emerald-900/40 blur-[80px]" />
                    
                    {/* Technical Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
                    
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
                </div>

                {/* Branding */}
                <div className="relative z-10 flex items-center gap-3 text-lg font-medium tracking-tight animate-in fade-in slide-in-from-top-4 duration-700">
                    <span className="font-bold text-xl">Himsog</span>
                </div>

                {/* Onboarding Steps Showcase */}
                <div className="relative z-10 my-auto max-w-[500px]">
                     <div className="mb-10 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Discover healthcare providers on the map.
                        </h2>
                        <p className="text-lg text-slate-400">
                           Create your account to explore nearby clinics, book appointments, and connect with healthcare providers.
                        </p>
                    </div>

                    <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-20px)] before:w-[2px] before:bg-slate-800">
                        {/* Step 1 */}
                        <div className="relative flex items-start gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 ring-4 ring-slate-950">
                                <span className="text-sm font-bold">1</span>
                            </div>
                            <div className="pt-1">
                                <h3 className="text-lg font-semibold text-white">Create Your Account</h3>
                                <p className="text-sm text-slate-400">Sign up quickly to access the Himsog healthcare network.</p>
                            </div>
                        </div>

                         {/* Step 2 */}
                        <div className="relative flex items-start gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-emerald-400 ring-4 ring-slate-950 border border-slate-700">
                                <span className="text-sm font-bold">2</span>
                            </div>
                            <div className="pt-1">
                                <h3 className="text-lg font-semibold text-white">Explore the Map</h3>
                                <p className="text-sm text-slate-400">Find verified providers, clinics, and services near your location.</p>
                            </div>
                        </div>

                         {/* Step 3 */}
                        <div className="relative flex items-start gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 ring-4 ring-slate-950 border border-slate-700">
                                <span className="text-sm font-bold">3</span>
                            </div>
                            <div className="pt-1">
                                <h3 className="text-lg font-semibold text-white">Book & Connect</h3>
                                <p className="text-sm text-slate-400">Schedule appointments and message providers directly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Metadata */}
                 <div className="relative z-10 flex justify-between text-xs text-slate-500">
                   <p>© 2024 Himsog Inc.</p>
                   <p>Join <span className="text-white">10,000+</span> users today</p>
                </div>
            </div>
        </div>
    )
}