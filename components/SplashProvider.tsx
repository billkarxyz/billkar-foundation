"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setHydrated(true);
    // Delay sedikit agar animasi terlihat
    const timeout = setTimeout(() => setShowSplash(false), 700);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <AnimatePresence>
        {(!hydrated || showSplash) && (
          <motion.div
            key="splash"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2.5, rotate: 45 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center w-screen h-screen bg-background">
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0, rotate: 20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full bg-primary flex items-center justify-center font-bold text-5xl text-primary-foreground shadow-lg">
              B
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {hydrated && !showSplash && children}
    </>
  );
}
