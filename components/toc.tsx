import { getDocsTocs } from "@/lib/markdown";
import TocObserver from "./toc-observer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Toc({ path }: { path: string }) {
  const tocs = await getDocsTocs(path);

  return (
    <div className="lg:flex items-end flex-col hidden toc w-full h-[calc(100vh-48px)] xl:sticky xl:top-1 xl:h-[96.95vh]">
      <div className="flex flex-col gap-3 w-full pl-6">
        <h3 className="font-semibold text-sm">On this page</h3>
        <ScrollArea className="pb-2 pt-0.5 h-full">
          <TocObserver data={tocs} />
        </ScrollArea>
      </div>
    </div>
  );
}

