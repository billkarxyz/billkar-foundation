"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion"; // pastikan import dari "framer-motion"
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  loop?: boolean; // <-- tambah properti loop
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  loop = false, // default: tidak looping
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion(Component);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    let typingEffect: NodeJS.Timeout;

    const startTyping = () => {
      typingEffect = setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
          if (loop) {
            setTimeout(() => {
              i = 0;
              setDisplayedText("");
              startTyping();
            }, 1000); // jeda sebelum ulangi
          }
        }
      }, duration);
    };

    startTyping();

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started, loop]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-bold tracking-[-0.02em]", className)}
      {...props}>
      {displayedText}
      <span className="text-primary animate-pulse">|</span>
    </MotionComponent>
  );
}
