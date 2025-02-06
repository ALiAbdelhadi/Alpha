"use client";

import Container from "@/components/Container";
import Link from "@/components/link";
import { WorldMap } from "@/components/WorldMap";
import { Phone } from 'lucide-react';
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="bg-background text-foreground">
            <Container className="py-12 md:py-24">
                <div className="text-center mb-12">
                    <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Contact Us</p>
                    <h1 className="text-4xl font-bold mb-4">Get In Touch with Our Team</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We are here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>
                <div className="mb-16">
                    <WorldMap
                        dots={[
                            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
                            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
                            { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
                            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
                            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
                            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
                        ]}
                    />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <ContactCard
                        title="Sales"
                        description="Reach us via WhatsApp anytime for instant support or inquiries."
                        icon={<Image src="/whatsapp.svg" alt="Whatsapp icon" width={24} height={24} className="h-6 w-6" />}
                        contact="+20 (0106) 623-4315"
                        href="https://wa.me/2016234315"
                    />
                    <ContactCard
                        title="Phone"
                        description="Prefer a direct call? Contact us 24/7 for immediate assistance!"
                        icon={<Phone className="h-6 w-6" />}
                        contact="+20 (0106) 623-4315"
                        href="tel:+2016234315"
                    />
                </div>
            </Container>
        </div>
    );
}

interface ContactCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    contact: string;
    href: string;
}

function ContactCard({ title, description, icon, contact, href }: ContactCardProps) {
    return (
        <div>
            <div className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
                <Link
                    href={href}
                    className="text-sm font-medium text-primary hover:text-primary/90 transition-colors"
                >
                    {contact}
                </Link>
            </div>
        </div>
    );
}
