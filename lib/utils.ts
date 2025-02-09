import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { EachRoute, ROUTES } from "./routes-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function helperSearch(
  query: string,
  node: EachRoute,
  prefix: string,
  currenLevel: number,
  maxLevel?: number
) {
  const res: EachRoute[] = [];
  let parentHas = false;

  const nextLink = `${prefix}${node.href}`;
  if (!node.noLink && node.title.toLowerCase().includes(query.toLowerCase())) {
    res.push({ ...node, items: undefined, href: nextLink });
    parentHas = true;
  }
  const goNext = maxLevel ? currenLevel < maxLevel : true;
  if (goNext)
    node.items?.forEach((item) => {
      const innerRes = helperSearch(
        query,
        item,
        nextLink,
        currenLevel + 1,
        maxLevel
      );
      if (!!innerRes.length && !parentHas && !node.noLink) {
        res.push({ ...node, items: undefined, href: nextLink });
        parentHas = true;
      }
      res.push(...innerRes);
    });
  return res;
}

export function advanceSearch(query: string) {
  return ROUTES.map((node) =>
    helperSearch(query, node, "", 1, query.length == 0 ? 2 : undefined)
  ).flat();
}

// Thursday, May 23, 2024
export function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

//  May 23, 2024
export function formatDate2(dateStr: string): string {
  const [day, month, year] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function stringToDate(date: string) {
  const [day, month, year] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}



export function constructMetadata({
  title = "Alphabyte - Software Company ",
  description = "Alphabyte Company",
  image = "/Logo.png",
  icons = "/favicon.ico",
  openGraph,
  twitter,

}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  openGraph?: Metadata['openGraph'];
  twitter?: Metadata['twitter'];
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: openGraph ?? {
      type: "website",
      locale: "ar_EG",
      url: "https://alphabiyte.com/",
      siteName: "Alpha Company",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Alpha Company Logo",
        },
      ],
    },
    twitter: twitter ?? {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      // creator: "@ArtLightingEG",
      // site: "@ArtLightingEG",
    },
    icons,
    keywords: ["Software tech"
    ],
    metadataBase: new URL("https://alphabiyte.com/"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "https://alphabiyte.com/",
    },
    other: {
      "application-name": "Art Lighting Company",
    },
  };
}