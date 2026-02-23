"use client";

import Skills from "@/components/Skills";
import { motion } from "framer-motion";

export default function Resume() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col bg-gray-100/30 dark:bg-gray-700/30 p-4 rounded-lg w-full h-full">
      <div className="flex md:flex-row flex-col justify-around gap-8">
        {/* Education Section */}
        <motion.div
          className="flex flex-col max-w-md"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
          <h2 className="mb-4 font-semibold text-2xl">Education</h2>
          <div className="mb-4">
            <h3 className="font-medium text-lg">
              Bachelor of Computer Science
            </h3>
            <p className="text-secondary-foreground text-sm">
              University of Al-Musdariyah
            </p>
            <p className="text-muted-foreground text-sm">2023 - Present</p>
            <p className="mt-2 text-sm leading-relaxed">
              Focused on Software Engineering, Data Structures, and Web
              Development.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="flex flex-col max-w-md"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
          <h2 className="mb-4 font-semibold text-2xl">Experience</h2>
          <div className="mb-4">
            <h3 className="font-medium text-lg">Full Stack Developer</h3>
            <p className="text-secondary-foreground text-sm">
              Tech Innovate Inc.
            </p>
            <p className="text-muted-foreground text-sm">2023 - Present</p>
            <ul className="mt-2 ml-5 text-sm leading-relaxed list-disc">
              <li>Developed and maintained scalable React applications</li>
              <li>Collaborated with UI/UX teams for better user experience</li>
              <li>Improved performance and reduced load times by 30%</li>
              <li>Implemented responsive design for mobile and desktop</li>
              <li>Worked with RESTful APIs and third-party integrations</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="mt-8 max-w-full">
        <h2 className="mb-4 font-semibold text-xl">Skills</h2>
        <Skills />
      </motion.div>
    </div>
  );
}
