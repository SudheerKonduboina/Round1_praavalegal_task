"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PortalCardProps {
    rotation?: number;
    delay?: number;
    className?: string;
}

export default function PortalCard({
    rotation = -2,
    delay = 0.5,
    className = "",
}: PortalCardProps) {
    return (
        <motion.div
            className={`bg-portal-bg/60 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md max-w-[260px] cursor-default select-none ${className}`}
            style={{ rotate: `${rotation}deg` }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                scale: 1.04,
                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.25 },
            }}
        >
            <div className="flex items-start gap-3">
                {/* Purple accent bar */}
                <div className="w-1 h-12 rounded-full bg-primary-blue/60 mt-1 flex-shrink-0" />

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-card-orange/30">
                    <Image
                        src="/avatar.png"
                        alt="John Doe"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-foreground leading-tight">
                        John Doe – Portal
                    </p>
                    <p className="text-xs text-text-muted mt-0.5 leading-snug">
                        Hey! Could you please review a document for me?
                    </p>
                    <p className="text-xs text-primary-blue mt-1 font-medium">
                        MAT-2953 · 2 h ago
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
