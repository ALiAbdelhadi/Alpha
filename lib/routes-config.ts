import { EachRoute, Page } from "@/types";

export const ROUTES: EachRoute[] = [
  {
    title: "Docs",
    href: "",
    noLink: true,
    items: [
      {
        title: "Getting Started",
        href: "/getting-started",
        items: [
          { title: "Introduction", href: "/introduction" },
          { title: "Installation", href: "/installation" },
        ],
      },
    ],
  },
];

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
