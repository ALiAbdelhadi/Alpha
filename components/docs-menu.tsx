"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DocsMenu({ isSheet = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();
  if (!pathname.startsWith("/docs")) return null;
  const closeSheet = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col justify-between gap-3.5 mt-5 pr-2 pb-9">
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/docs${item.href}`,
          level: 0,
          isSheet,
          closeSheet
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
