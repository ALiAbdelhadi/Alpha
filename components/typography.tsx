import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert
      max-w-none w-full
      prose-headings:scroll-m-20 prose-headings:font-semibold
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h4:m-0
      prose-p:text-base
      prose-a:text-primary hover:prose-a:text-primary/80
      prose-code:px-2.5 prose-code:py-[3px] prose-code:font-medium
      prose-code:text-sm prose-code:bg-gray-100
      prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-stone-100 prose-img:my-0
      prose-strong:font-semibold
      prose-ul:pl-6 prose-ol:pl-6
      prose-li:my-2
      prose-table:border-collapse prose-td:border prose-td:px-3 prose-td:py-2
      prose-th:border prose-th:px-3 prose-th:py-2 prose-th:font-semibold
      transition-colors duration-200
    ">
      {children}
    </div>
  );
}
