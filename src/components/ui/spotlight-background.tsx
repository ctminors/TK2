"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

// Individual Spotlight element
const Spotlight = ({ className, ...props }: any) => {
  return (
    <motion.div
      className={cn(
        "absolute pointer-events-none rounded-[100%]",
        className
      )}
      style={{
        background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 40%, rgba(212, 175, 55, 0) 70%)",
        filter: "blur(80px)",
      }}
      {...props}
    />
  );
};

// SpotlightBackground container
const SpotlightBackground = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <Spotlight
          initial={{ x: "-20%", y: "-20%", rotate: "-15deg", scale: 1 }}
          animate={{
            x: ["-20%", "10%", "-20%"],
            y: ["-20%", "5%", "-20%"],
            rotate: ["-15deg", "-5deg", "-15deg"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="left-0 top-0 w-[1200px] h-[600px]"
        />

        <Spotlight
          initial={{ x: "-50%", y: "-50%", rotate: "20deg", scale: 1 }}
          animate={{
            x: ["-50%", "-40%", "-50%"],
            y: ["-50%", "-45%", "-50%"],
            rotate: ["20deg", "30deg", "20deg"],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
          className="left-1/2 top-1/2 w-[1400px] h-[700px]"
        />

        <Spotlight
          initial={{ x: "10%", y: "10%", rotate: "-10deg", scale: 1 }}
          animate={{
            x: ["10%", "-5%", "10%"],
            y: ["10%", "15%", "10%"],
            rotate: ["-10deg", "-20deg", "-10deg"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 4,
          }}
          className="right-0 bottom-0 w-[1000px] h-[500px]"
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightBackground;
