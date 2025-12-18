import { Sidebar, Header } from "@/components/dashboard";
import { userNavSections } from "@/components/user";
import { requireRole } from "@/lib/auth-server";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side role check - redirects if not USER role
  await requireRole("USER");

  return (
    <div className="flex min-h-screen">
      <Sidebar sections={userNavSections} />
      <div className="flex-1 flex flex-col">
        <Header title="Dashboard" description="Manage your health journey" />
        <main className="flex-1 overflow-y-auto bg-muted/30 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
