import Container from "@/components/Container";
import { PropsWithChildren } from "react";
const BlogLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container className="flex flex-col items-center justify-center pt-8 pb-10 w-full">
      {children}
    </Container>
  );
}
export default BlogLayout