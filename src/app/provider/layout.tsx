import { Sidebar, Header } from "@/components/dashboard";
import { providerNavSections } from "@/components/provider";
import { requireRole } from "@/lib/auth-server";

export default async function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side role check - redirects if not PROVIDER role
  await requireRole("PROVIDER");

  return (
    <div className="flex min-h-screen">
      <Sidebar sections={providerNavSections} brandName="Provider Portal" />
      <div className="flex-1 flex flex-col">
        <Header title="Provider Dashboard" description="Manage your practice" />
        <main className="flex-1 overflow-y-auto bg-muted/30 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
