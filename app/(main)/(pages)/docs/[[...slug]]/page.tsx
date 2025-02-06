import DocsBreadcrumb from "@/components/docs-breadcrumb";
import DocsPaginationPage from "@/components/DocsPaginationPage";
import Toc from "@/components/toc";
import { Typography } from "@/components/typography";
import { getDocsForSlug } from "@/lib/markdown";
import { page_routes } from "@/lib/routes-config";
import { DocsPageProps } from "@/types";
import { notFound } from "next/navigation";
export default async function DocsPage(props: DocsPageProps) {
  const params = await props.params;
  const { slug = [] } = params;
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) notFound();
  return (
    <div className="flex flex-col lg:flex-row relative justify-between min-h-screen">
      <div className="flex-grow w-full lg:w-[calc(100%-238px)]">
        <div className="pb-4">
          <DocsBreadcrumb paths={slug} />
        </div>
        <section className="flex-grow">
          <Typography>
            <h1 className="text-3xl !-mt-0.5">{res.frontmatter.title}</h1>
            {res.frontmatter.description && (
              <p className="-mt-4 text-muted-foreground text-[16.5px]">
                {res.frontmatter.description}
              </p>
            )}
            <div>{res.content}</div>
          </Typography>
        </section>
        <div>
          <DocsPaginationPage pathname={pathName} />
        </div>
      </div>
      <div className="hidden lg:block w-[238px]">
        <Toc path={pathName} />
      </div>
    </div>
  );
}

export async function generateMetadata(props: DocsPageProps) {
  const params = await props.params;
  const { slug = [] } = params;
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}