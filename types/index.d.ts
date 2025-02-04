import { ReactNode } from "react";

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
    showTags: boolean
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