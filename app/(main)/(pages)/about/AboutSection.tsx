"use client"
import { services } from '@/app/constant';
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Asterisk, MoveRight, Quote } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { GoArrowDown } from "react-icons/go";
export default function AboutSection() {
    const [activeService, setActiveService] = useState<number>(0);
    return (
        <Fragment>
            <section className="pt-4 py-12 space-y-8">
                <Container>
                    <div className="relative w-full mb-12 h-[400px] overflow-hidden bg-gradient-to-r from-gray-200 to-[#ffff]">
                        <div className="absolute inset-0 w-full h-full">
                            <div
                                className="w-full h-full bg-no-repeat bg-cover bg-center opacity-80"
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
                        </div>
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Our Story, Vision,<br />and Values
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Learn about our commitment to excellence, innovation, and
                                    the principles that guide our work every day.
                                </p>
                            </div>
                            <div className="absolute bottom-8 right-8" >
                                <Link href="#about">
                                    <Button size={"icon"} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-pointer transition-colors" id='about'>
                                        <GoArrowDown className="w-6 h-6 text-white transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8" id="about">
                        <div className="space-y-6 p-4 md:p-6">
                            <div className="space-y-4">
                                <Quote className="h-8 w-8 text-primary" />
                                <p className="text-gray-700 text-base leading-relaxed md:text-lg lg:text-2xl">
                                    Our passionate team of innovators is dedicated to bringing your vision to life, crafting digital experiences that not only meet but exceed expectations. We&apos;re driven to transform your ideas into impactful digital experiences that captivate your audience and inspire action.
                                </p>
                            </div>
                            <div className="relative w-full h-44 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden">
                                <img
                                    src="/abstract-waves.jpeg"
                                    alt="Abstract waves"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-primary via-[#00D5CD] to-[#02F4EE] text-white rounded-2xl lg:max-h-[430px] xl:max-h-[400px]">
                            <div className="space-y-6">
                                <div className="flex gap-2 items-center justify-between md:justify-end">
                                    <span className="text-sm font-medium sm:text-lg">ABOUT US</span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M7 12.5l3 3 7-7"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="text-white/90 leading-relaxed space-y-4 text-base ">
                                    <p>
                                        Alpha is at the forefront of technological innovation. We&apos;re committed to building products that resonate with users on a deep level. By combining cutting-edge technology with a human touch, we create experiences that inspire and empower. Our team of talented designers, engineers, and innovators is passionate about pushing the boundaries of what&apos;s possible. We believe that technology should be accessible to everyone, and we strive to create products that are both user-friendly and visually stunning. Whether you&apos;re a seasoned tech expert or a first-time user, we&apos;re confident that you&apos;ll find something to love about our products.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>
            <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="p-6 relative">
                        <Asterisk className="absolute top-4 right-4 w-8 h-8 text-primary" />
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold tracking-tight">VISION</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To create a world where technology empowers human connection and enriches lives through beautiful, intuitive, and emotionally resonant experiences.
                            </p>
                        </div>
                    </Card>
                    <Card className="p-6 relative">
                        <Asterisk className="absolute top-4 right-4 w-8 h-8 text-primary" />
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold tracking-tight">MISSION</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To craft innovative software and hardware solutions that seamlessly blend cutting-edge technology with human-centered design, fostering a loyal community built on trust, exceptional service, and a shared passion for a better future.
                            </p>
                        </div>
                    </Card>
                    <Card className="overflow-hidden">
                        <div className="relative h-full min-h-[300px]">
                            <Image
                                src="/placeholder.svg"
                                alt="Modern workspace with desktop computer"
                                width={500}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                    </Card>
                </div>
            </section>
            <section className="bg-background text-foreground py-20 relative overflow-hidden">
                <Container>
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">
                        OUR SERVICES
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                What <span className="text-primary">Services</span><br />
                                We&apos;re Offering
                            </h2>
                        </div>
                        <div className="hidden lg:block relative">
                            <p className="text-muted-foreground mt-6 max-w-xl leading-6">
                                We empower businesses to thrive online. Our services enhance online visibility, expand market reach, and boost revenue through effective digital strategies.
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 space-y-6">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className={"service-card border-b border-border pb-6 transition-all duration-300"}
                                onMouseEnter={() => setActiveService(index)}
                            >
                                <div className="group flex items-center justify-between cursor-pointer p-6">
                                    <Link href={service.link} className="space-y-2 flex-1">
                                        <h3
                                            className={cn("text-3xl font-medium transition-colors duration-300", activeService === index
                                                ? 'text-primary'
                                                : 'text-muted-foreground group-hover:text-foreground'
                                            )}
                                        >
                                            {service.title}
                                        </h3>
                                        <p
                                            className={cn("transition-all duration-500 max-w-xl overflow-hidden ", activeService === index
                                                ? 'text-muted-foreground h-auto opacity-100'
                                                : 'h-0 opacity-0'
                                            )}
                                        >
                                            {service.description}
                                        </p>
                                    </Link>
                                    <MoveRight
                                        className={cn("w-6 h-6 transition-transform duration-500", activeService === index
                                            ? 'opacity-100 translate-x-0 text-primary'
                                            : 'opacity-0 -translate-x-6'
                                        )}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

