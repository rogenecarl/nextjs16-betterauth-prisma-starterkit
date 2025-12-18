import { Sidebar, Header } from "@/components/dashboard";
import { adminNavSections } from "@/components/admin";
import { requireRole } from "@/lib/auth-server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side role check - redirects if not ADMIN role
  await requireRole("ADMIN");

  return (
    <div className="flex min-h-screen">
      <Sidebar sections={adminNavSections} brandName="Admin Portal" />
      <div className="flex-1 flex flex-col">
        <Header title="Admin Dashboard" description="System administration" />
        <main className="flex-1 overflow-y-auto bg-muted/30 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
