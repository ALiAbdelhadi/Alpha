"use client"
import Container from "@/components/Container";
import { DocsLeftBar } from "@/components/DocsLeftBar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronRight, X } from 'lucide-react';
import { ReactNode, useState } from "react";
const DocsLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Container>
      <div className="flex flex-col lg:flex-row relative min-h-screen gap-6">
        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          {/* Fixed Mobile Trigger */}
          <div className={cn("lg:hidden fixed top-[64px] left-0 right-0 z-50 bg-white/10 backdrop-blur-lg backdrop-filter backdrop-saturate-[180%] transition-all duration-300")}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SheetTrigger asChild>
                <div
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="cursor-pointer border-b border-t border-gray-200 w-full py-3 flex items-center"
                >
                  <ChevronRight />
                  <span className="font-semibold text-lg">Menu</span>
                </div>
              </SheetTrigger>
            </div>
          </div>
          <SheetContent side="bottom" className="h-full">
            <div className="flex justify-between items-center p-4">
              <span className="font-semibold text-lg">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <div className="p-4">
              <DocsLeftBar />
            </div>
          </SheetContent>
        </Sheet>
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-[238px] sticky top-0 h-screen" >
          <DocsLeftBar />
        </aside>
        {/* Main Content Area */}
        <div className="flex-[5.25] min-w-0 h-screen overflow-y-auto hide-scrollbar">
          {children}
        </div>
      </div>
    </Container>
  );
}
export default DocsLayout