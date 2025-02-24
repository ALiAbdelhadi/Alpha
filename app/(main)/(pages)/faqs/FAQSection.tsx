"use client";

import React from 'react';
import { faqs } from "@/constant";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQ {
    question: string;
    answer: string;
}

interface Category {
    category: string;
    questions: FAQ[];
}

interface AccordionSectionProps {
    faq: FAQ;
    categoryIndex: number;
    questionIndex: number;
}

interface CategorySectionProps {
    category: Category;
    categoryIndex: number;
}
const AccordionSection: React.FC<AccordionSectionProps> = React.memo(({ faq, categoryIndex, questionIndex }) => {
    return (
        <AccordionItem value={`faq-${categoryIndex}-${questionIndex}`}>
            <AccordionTrigger className="text-xl font-semibold">
                {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
            </AccordionContent>
        </AccordionItem>
    );
});
AccordionSection.displayName = 'AccordionSection';

const CategorySection: React.FC<CategorySectionProps> = React.memo(({ category, categoryIndex }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">{category.category}</h2>
            <Accordion type="single" collapsible className="mt-6 space-y-4">
                {category.questions.map((faq, questionIndex) => (
                    <AccordionSection
                        key={questionIndex}
                        faq={faq}
                        categoryIndex={categoryIndex}
                        questionIndex={questionIndex}
                    />
                ))}
            </Accordion>
        </div>
    );
});
CategorySection.displayName = 'CategorySection';

const FAQSection: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 bg-background text-foreground">
            <div className="grid gap-12">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-muted-foreground text-base">
                        Find answers to your most common questions about our services, pricing, process, and more.
                    </p>
                </div>
                <div className="grid gap-8">
                    {faqs.map((category, categoryIndex) => (
                        <CategorySection
                            key={categoryIndex}
                            category={category}
                            categoryIndex={categoryIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;