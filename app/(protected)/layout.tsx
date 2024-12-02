import { Navbar } from "./_components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return (
        <SidebarProvider>
            <AppSidebar />  
            <main className="p-4">
                <SidebarTrigger />
                {children}
            </main>         
        </SidebarProvider>
    );
};

export default ProtectedLayout;