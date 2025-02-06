import CodeView from "@/components/CodeView";
import ComponentPreview from "@/components/ComponentView";
import Image from "@/components/image";
import Link from "@/components/link";
import CodeBlock from "@/components/markdown/CodeBlock";
import NoteMarkdown from "@/components/markdown/NoteMarkdown";
import MdxWrapper from "@/components/MdxWrapper";
import Note from "@/components/note";
import { Stepper, StepperItem } from "@/components/stepper";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export const components = {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
   Note,
   CodeBlock,
   ComponentPreview,
   CodeView,
   Stepper,
   StepperItem,
   img: Image,
   a: Link,
   Badge,
   NoteMarkdown,
   MdxWrapper
};