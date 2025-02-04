"use client";

import { getDocsTocs } from "@/lib/markdown";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";

type TocItem = {
  href: string;
  level: number;
  text: string;
};

type Props = { data: Awaited<ReturnType<typeof getDocsTocs>> };

export default function TocObserver({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const tocItems = useMemo(() => data, [data]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20px 0px -20px 0px",
      threshold: 0.1,
    });

    tocItems.forEach((item) => {
      const element = document.getElementById(item.href.slice(1));
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [tocItems]);

  const getLinkClassName = (level: number, isActive: boolean) =>
    clsx(
      "transition-colors duration-200 hover:text-primary",
      {
        "pl-0": level === 2,
        "pl-4": level === 3,
        "pl-8": level === 4,
        "font-semibold text-primary": isActive,
      }
    );

  return (
    <nav className="flex flex-col gap-2.5 text-sm text-stone-800 dark:text-stone-300/85 ml-0.5">
      {tocItems.map(({ href, level, text }: TocItem) => (
        <Link
          key={href}
          href={href}
          className={getLinkClassName(level, activeId === href.slice(1))}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
}

