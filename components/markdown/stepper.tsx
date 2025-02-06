import CodeView from '../CodeView'

const stepper = () => {
   return (
      <CodeView
         language='tsx'
         code={`
         import { cn } from "@/lib/utils";
         import clsx from "clsx";
         import { Children, PropsWithChildren } from "react";
         
         export function Stepper({ children }: PropsWithChildren) {
           const length = Children.count(children);
           return (
             <div className="flex flex-col my-5 md:my-10 pl-[4px] md:px-4 py-3 md:py-7 rounded-xl">
               {Children.map(children, (child, index) => {
                 return (
                   <div
                     className={cn(
                       "border-l pl-8 ml-3 relative",
                       clsx({
                         "pb-5 ": index < length - 1,
                       })
                     )}
                   >
                     <div className="bg-muted w-8 h-8 text-xs font-medium rounded-md border flex items-center justify-center absolute -left-4 font-code">
                       {index + 1}
                     </div>
                     {child}
                   </div>
                 );
               })}
             </div>
           );
         }
         
         export function StepperItem({
           children,
           title,
         }: PropsWithChildren & { title?: string }) {
           return (
             <div className="pt-0.5">
               <h4 className="mt-0">{title}</h4>
               <div>{children}</div>
             </div>
           );
         }
         
         `}
      />
   )
}

export default stepper