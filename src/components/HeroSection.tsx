"use client";

import { motion } from "framer-motion";
import {
    FileText,
    ListChecks,
    Receipt,
    Briefcase,
} from "lucide-react";
import FloatingCard from "./FloatingCard";
import PortalCard from "./PortalCard";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* ── Background Blobs ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Top-right blob */}
                <div
                    className="absolute -top-24 right-[10%] w-[420px] h-[120px] rounded-full bg-blob-color/50 blur-sm"
                    style={{ animation: "blob-drift 14s ease-in-out infinite" }}
                />
                {/* Top-left small blob */}
                <div
                    className="absolute top-16 left-[5%] w-[200px] h-[60px] rounded-full bg-blob-color/40 blur-sm"
                    style={{ animation: "blob-drift 18s ease-in-out infinite 2s" }}
                />
                {/* Middle-right blob */}
                <div
                    className="absolute top-[35%] right-[3%] w-[180px] h-[55px] rounded-full bg-blob-color/35 blur-sm"
                    style={{ animation: "blob-drift 16s ease-in-out infinite 4s" }}
                />
                {/* Bottom-left blob */}
                <div
                    className="absolute bottom-[15%] left-[8%] w-[250px] h-[70px] rounded-full bg-blob-color/30 blur-sm"
                    style={{ animation: "blob-drift 20s ease-in-out infinite 1s" }}
                />
                {/* Bottom-right blob */}
                <div
                    className="absolute bottom-[8%] right-[15%] w-[320px] h-[90px] rounded-full bg-blob-color/40 blur-sm"
                    style={{ animation: "blob-drift 15s ease-in-out infinite 3s" }}
                />
            </div>

            {/* ── Main Content ── */}
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-0">
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-8">
                    {/* ── Left: Text Content ── */}
                    <motion.div
                        className="flex-1 max-w-xl lg:max-w-lg xl:max-w-xl"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.7rem] leading-[1.1] font-light text-text-muted/80 tracking-tight">
                            A single platform to{" "}
                            <br className="hidden sm:block" />
                            <span className="font-extrabold text-primary-blue">
                                manage
                            </span>{" "}
                            every part of{" "}
                            <br className="hidden sm:block" />
                            your{" "}
                            <span className="font-extrabold text-foreground">
                                legal work
                            </span>
                        </h1>

                        <motion.p
                            className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Track matters, coordinate schedules, manage clients,
                            centralize documents, and handle communication – all in
                            one system.
                        </motion.p>
                    </motion.div>

                    {/* ── Right: Floating Cards ── */}
                    <div className="flex-1 relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] hidden md:block">
                        {/* Billing – top right, tilted right */}
                        <div
                            className="absolute top-[2%] left-[35%] xl:left-[30%]"
                            style={{
                                animation: "float 6s ease-in-out infinite",
                            }}
                        >
                            <FloatingCard
                                color="blue"
                                rotation={-15}
                                icon={Receipt}
                                label="Billing"
                                delay={0.2}
                            />
                        </div>

                        {/* Matters – middle left, tilted left */}
                        <div
                            className="absolute top-[30%] left-[0%] xl:left-[-2%]"
                            style={{
                                animation: "float-delayed 7s ease-in-out infinite 0.5s",
                            }}
                        >
                            <FloatingCard
                                color="orange"
                                rotation={-8}
                                icon={Briefcase}
                                label="Matters"
                                delay={0.35}
                            />
                        </div>

                        {/* Portal Card – center */}
                        <div
                            className="absolute top-[34%] left-[35%] xl:left-[32%]"
                            style={{
                                animation: "float 8s ease-in-out infinite 1s",
                            }}
                        >
                            <PortalCard rotation={-1} delay={0.5} />
                        </div>

                        {/* Tasks – bottom center-left */}
                        <div
                            className="absolute top-[62%] left-[15%] xl:left-[12%]"
                            style={{
                                animation: "float-delayed 6.5s ease-in-out infinite 0.8s",
                            }}
                        >
                            <FloatingCard
                                color="teal"
                                rotation={-6}
                                icon={ListChecks}
                                label="Tasks"
                                delay={0.55}
                            />
                        </div>

                        {/* Documents – bottom right */}
                        <div
                            className="absolute top-[60%] left-[52%] xl:left-[50%]"
                            style={{
                                animation: "float 7.5s ease-in-out infinite 1.2s",
                            }}
                        >
                            <FloatingCard
                                color="dark"
                                rotation={-4}
                                icon={FileText}
                                label="Documents"
                                delay={0.7}
                            />
                        </div>
                    </div>

                    {/* ── Mobile: Stacked Cards ── */}
                    <div className="flex flex-col items-center gap-4 md:hidden w-full">
                        <FloatingCard
                            color="blue"
                            rotation={0}
                            icon={Receipt}
                            label="Billing"
                            delay={0.2}
                        />
                        <FloatingCard
                            color="orange"
                            rotation={0}
                            icon={Briefcase}
                            label="Matters"
                            delay={0.3}
                        />
                        <PortalCard rotation={0} delay={0.4} />
                        <FloatingCard
                            color="teal"
                            rotation={0}
                            icon={ListChecks}
                            label="Tasks"
                            delay={0.5}
                        />
                        <FloatingCard
                            color="dark"
                            rotation={0}
                            icon={FileText}
                            label="Documents"
                            delay={0.6}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
