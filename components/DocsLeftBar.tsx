import { ScrollArea } from "@/components/ui/scroll-area";
import DocsMenu from "./docs-menu";

export function DocsLeftBar() {
  return (
    <div className="h-full w-full lg:w-[238px]">
      <ScrollArea className="py-4 h-full">
        <DocsMenu />
      </ScrollArea>
    </div>
  );
}