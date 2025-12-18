"use client"

import { signInWithGoogle } from "@/actions/auth/google-auth-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { SignUpUserSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import z from "zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signUpUser } from "@/actions/auth/auth-actions"
import { Loader2, User, Mail, Lock } from "lucide-react"
import { ROLE_REDIRECTS } from "@/config/auth"

export function RegisterUserForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof SignUpUserSchema>>({
        resolver: zodResolver(SignUpUserSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    async function onSubmit(values: z.infer<typeof SignUpUserSchema>) {
        setIsLoading(true)
        const toastId = toast.loading("Creating account...")

        try {
            const result = await signUpUser(values)

            if (result.success) {
                toast.success("Account created successfully!", { id: toastId })
                // Better Auth auto-logs in on signup, refresh and redirect to user dashboard
                router.refresh()
                router.push(ROLE_REDIRECTS.USER)
            } else {
                toast.error(result.error, { id: toastId })
            }
        } catch (error) {
            toast.error("An unexpected error occurred", { id: toastId })
            console.error("Sign up error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-[400px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Section */}
            <div className="flex flex-col space-y-2 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Create an account
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Join us to book appointments with trusted providers.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-700 dark:text-slate-300">Full Name</FormLabel>
                                <FormControl>
                                    <div className="relative group">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                            className="pl-9 h-11 bg-white dark:bg-slate-950/50 border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-700 dark:text-slate-300">Email</FormLabel>
                                <FormControl>
                                    <div className="relative group">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                        <Input
                                            placeholder="name@example.com"
                                            {...field}
                                            className="pl-9 h-11 bg-white dark:bg-slate-950/50 border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 dark:text-slate-300">Password</FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                            <Input
                                                type="password"
                                                placeholder="••••••"
                                                {...field}
                                                className="pl-9 h-11 bg-white dark:bg-slate-950/50 border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 dark:text-slate-300">Confirm</FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                            <Input
                                                type="password"
                                                placeholder="••••••"
                                                {...field}
                                                className="pl-9 h-11 bg-white dark:bg-slate-950/50 border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 transition-all"
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-11 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all mt-2 cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating account...
                            </>
                        ) : "Create Account"}
                    </Button>
                </form>
            </Form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-50 dark:bg-[#0B0F19] px-2 text-slate-500">Or continue with</span>
                </div>
            </div>

            <Button
                variant="outline"
                type="button"
                className="w-full h-11 font-medium bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                onClick={signInWithGoogle}
            >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                    />
                </svg>
                Sign up with Google
            </Button>

            <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all">
                    Sign in
                </Link>
            </div>
            
            <div className="text-center text-[10px] text-slate-400 dark:text-slate-500 pt-4">
                By clicking continue, you agree to our Terms and Privacy Policy.
            </div>
        </div>
    )
}
