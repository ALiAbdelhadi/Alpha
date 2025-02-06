"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { advanceSearch, cn } from "@/lib/utils";
import { CommandIcon, FileIcon, SearchIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Anchor from "./anchor";
import { Badge } from "./ui/badge";

export default function Search() {
  const [searchedInput, setSearchedInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [platform, setPlatform] = useState<"mac" | "windows">("windows");

  // Detect platform (macOS or Windows)
  useEffect(() => {
    const DetectPlatform = () => {
      const platform = navigator.platform.toLowerCase()
      const userAgent = navigator.userAgent.toLowerCase()
      if (platform.includes("mac") || userAgent.includes("mac")) {
        setPlatform("mac")
      } else if (platform.includes("win") || userAgent.includes("win")) {
        setPlatform("windows")
      }
    }
    DetectPlatform();
  }, [])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })
  const filteredResults = useMemo(
    () => advanceSearch(searchedInput.trim()),
    [searchedInput]
  );

  return (
    <div className="w-full max-w-[2rem] sm:max-w-sm md:max-w-md">
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) setSearchedInput("");
          setIsOpen(open);
        }}
      >
        <DialogTrigger asChild>
          <div className="relative flex items-center w-full cursor-pointer">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 " />
            <input
              className="sm:w-full w-[80%] bg-transparent md:bg-gray-100 border-none outline-none h-9 pl-10 pr-0 md:pr-3 text-sm overflow-ellipsis rounded-md cursor-pointer"
              placeholder={"Search docs..."}
              type="search"
              readOnly
            />
            {/* Change Command/Control Icon Based on Platform */}
            <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-2 text-xs font-mono items-center gap-0.5 md:dark:bg-stone-900 md:bg-[#ffffff] text-[#3f3f3f] p-1 rounded-sm font-semibold">
              {platform === "mac" ? (
                <>
                  <CommandIcon className="w-3 h-3" />
                  <span>K</span>
                </>
              ) : (
                <>
                  <span>Ctrl K</span>
                </>
              )}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent aria-labelledby="search-dialog-title" className="p-0 w-full max-w-lg sm:max-w-2xl top-[34%] md:top-[45%] !rounded-md">
          <DialogTitle id="search-dialog-title" className="sr-only">Search</DialogTitle>
          <DialogHeader>
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5" />
              <div className="flex justify-between items-center">
                <input
                  value={searchedInput}
                  onChange={(e) => setSearchedInput(e.target.value)}
                  placeholder="Type to search..."
                  autoFocus
                  className="h-14 pl-12 w-full pr-4 bg-transparent border-none text-base outline-none"
                />
                <DialogClose>
                  <Badge
                    className="bg-[#e8e8e8e6] py-[1px] px-1.5 text-sm hover:bg-[#e4e4e4e6] absolute right-4 top-4 text-black rounded-md"
                  >
                    Esc
                  </Badge>
                </DialogClose>
              </div>
            </div>
          </DialogHeader>
          {filteredResults.length == 0 && searchedInput && (
            <p className="text-muted-foreground mx-auto mt-4 text-sm px-4">
              No results found for{" "}
              <span className="text-primary">{`"${searchedInput}"`}</span>
            </p>
          )}
          <ScrollArea className="max-h-[60vh] overflow-y-auto">
            <div className="flex flex-col items-start overflow-y-auto px-2 pb-4">
              {filteredResults.map((item) => {
                const level = (item.href.split("/").slice(1).length - 1) as keyof typeof paddingMap;
                const paddingClass = paddingMap[level];
                return (
                  <DialogClose key={item.href} asChild>
                    <Anchor
                      className={cn(
                        "dark:hover:bg-[#ffffff0f] hover:bg-[#0000000f] w-full px-3 rounded-sm text-sm flex items-center gap-2.5",
                        paddingClass
                      )}
                      href={`/docs${item.href}`}
                    >
                      <div
                        className={cn(
                          "flex items-center w-fit h-full py-3 gap-1.5 px-2",
                          level > 1 && "border-l pl-4"
                        )}
                      >
                        <FileIcon className="h-[1.1rem] w-[1.1rem] mr-1" />{" "}
                        <span className="line-clamp-1">{item.title}</span>
                      </div>
                    </Anchor>
                  </DialogClose>
                );
              })}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const paddingMap = {
  1: "pl-2",
  2: "pl-4",
  3: "pl-6",
  4: "pl-8",
} as const;
