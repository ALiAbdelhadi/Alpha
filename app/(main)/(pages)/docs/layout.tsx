import Container from "@/components/Container";
import DocsNavigationOnMobile from "@/components/DocsNavigationOnMobile";
import { DocsSidebar } from "@/components/DocsSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 min-h-full">
        {/* Mobile Sidebar */}
        <DocsNavigationOnMobile />
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-[238px] sticky top-0">
          <ScrollArea className="h-full">
            <DocsSidebar />
          </ScrollArea>
        </aside>
        {/* Main Content Area */}
        <main className="flex-[5.25] min-w-0 overflow-y-auto hide-scrollbar py-6 h-screen">
          {children}
        </main>
      </div>
    </Container>
  );
};
export default DocsLayout;