"use client";

import CardProject from "@/components/CardProject";
import { projects } from "@/data/projects";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  // Variants container untuk stagger anak-anak
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay 150ms antar card
      },
    },
  };

  // Variants untuk tiap card (anak)
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 200 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300, // kekakuan pegas, semakin tinggi semakin kaku
        damping: 20, // redaman pegas, semakin tinggi semakin lembut
      },
    },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  return (
    <div className="flex flex-col px-4 w-full h-full md:overflow-y-auto">
      <div className="mb-6">
        <p className="text-muted-foreground">
          A collection of personal and freelance projects I've worked on
          recently.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="gap-4 grid grid-cols-1 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-xl rounded-lg">
            <Link href={`/projects/${project.id}`}>
              <CardProject
                key={index}
                title={project.title}
                img={project.image[0]}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
