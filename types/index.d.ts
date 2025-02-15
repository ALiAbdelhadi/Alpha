import { PropsWithChildren, ReactNode } from "react";
declare type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
    href: string
    children?: ReactNode
    className?: string
    target?: string
    isExternal?: boolean
}
declare type InputTypes = {
    type: string;
    id?: string;
    name?: string;
    className?: string;
    placeHolder: string;
    label: string;
};

declare type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

declare type Service = {
    id: string
    subtitle: string
    title: string;
    iconColor: string
    link: string
    description: string;
    showTags: boolean;
}

declare type Faqs = {
    category: string;
    questions: {
        question: string;
        answer: ReactNode
    }[]
}

declare type DocsPageProps = {
    params: Promise<{ slug: string[] }>;
};

declare type TimeLineProps = {
    title: string;
    content: ReactNode;
};

declare type LinkItems = {
    title: string;
    href: string
}
declare type servicesLinksProps = {
    title: string;
    description: string;
    href: string
}

// docs page
declare type BaseMdxFrontmatter = {
    title: string;
    description: string;
};
type Author = {
    avatar?: string;
    handle: string;
    username: string;
    handleUrl: string;
};

declare type BlogMdxFrontmatter = BaseMdxFrontmatter & {
    date: string;
    authors: Author[];
    cover: string;
};

declare type EachRoute = {
    title: string;
    href: string;
    noLink?: true;
    items?: EachRoute[];
};

declare type Page = {
    title: string;
    href: string
};

type NoteProps = PropsWithChildren & {
    title?: string;
    type?: "note" | "danger" | "warning" | "success";
};