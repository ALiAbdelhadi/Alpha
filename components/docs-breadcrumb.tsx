import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function DocsBreadcrumb({ paths }: { paths: string[] }) {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList className="flex items-center">
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((path, index) => (
            <BreadcrumbItem key={path} className="flex items-center">
              {index < paths.length - 1 ? (
                <BreadcrumbLink href={`/docs/${paths.slice(0, index + 1).join('/')}`}>
                  <span className="font-semibold">
                    {toTitleCase(path)}
                  </span>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  <span className="font-semibold">
                    {toTitleCase(path)}
                  </span>
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function toTitleCase(input: string): string {
  const words = input.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}
