import { SidebarProvider } from "@/components/ui/sidebar";
import { StudioNavbar } from "../ui/components/studio-navbar";
import { StudioSidebar } from "../ui/components/studio-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const StudioLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <StudioNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <StudioSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
