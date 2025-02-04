import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SheetClose } from "@/components/ui/sheet";
import { EachRoute } from "@/lib/routes-config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Anchor from "./anchor";

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  isSheet,
}: EachRoute & { level: number; isSheet: boolean }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(level == 0);
  useEffect(() => {
    if (path == href || path.includes(href)) setIsOpen(true);
  }, [href, path]);
  const Comp = (
    <Anchor
      activeClassName=" text-primary dark:font-medium font-semibold"
      href={href}
    >
      {title}
    </Anchor>
  );
  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h4 className="font-medium sm:text-sm text-primary">{title}</h4>
  );
  if (!items) {
    return <li className="flex flex-col">{titleOrLink}</li>;
  }
  return (
    <div className="flex flex-col gap-1 w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between cursor-pointer w-full">
            {titleOrLink}
            <motion.span
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <ChevronDown className="h-[0.9rem] w-[0.9rem]" />
            </motion.span>
          </div>
        </CollapsibleTrigger>
        <AnimatePresence initial={false}>
          {isOpen && (
            <CollapsibleContent forceMount>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ul
                  className={cn(
                    "flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",
                    level > 0 && "pl-4 border-l ml-1.5"
                  )}
                >
                  {items?.map((innerLink) => {
                    const modifiedItems = {
                      ...innerLink,
                      href: `${href + innerLink.href}`,
                      level: level + 1,
                      isSheet,
                    };
                    return (
                      <SubLink key={modifiedItems.href} {...modifiedItems} />
                    );
                  })}
                </ul>
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </Collapsible>
    </div>
  );
}
