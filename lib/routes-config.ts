// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

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
          { title: "Installation", href: "/Installation" },
        ],
      },
      {
        title: "Components",
        href: "/components",
        items: [
          { title: "Timeline", href: "/timeline" },
          { title: "Premium Carousel", href: "/premium-carousel" },
          { title: "Stepper", href: "/stepper" },
          { title: "Note", href: "/note" },
          { title: "Code Block", href: "/code-block" },
        ],
      },
      { title: "Themes", href: "/themes" },
    ],
  },
];

type Page = { title: string; href: string };

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
