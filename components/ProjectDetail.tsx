import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { motion, Variants } from "framer-motion";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    github: string;
    project: string;
    image: string[];
    techStack: React.ComponentType[];
  };
  onBack: () => void;
}

export function ProjectDetail({
  project,
  onBack,
}: {
  project: any;
  onBack: () => void;
}) {
  if (!project) return null;

  const springVariant: Variants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 100,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const techStackVariant: Variants = {
    initial: { opacity: 0, scale: 0.9, y: 100 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-white/30 dark:bg-gray-100/10 backdrop-blur-xl p-4 rounded-lg w-full h-full">
      <IoMdCloseCircle
        className="top-4 right-4 z-50 absolute w-8 h-8 text-black/50 hover:text-black dark:text-white/50 cursor-pointer dark:hover:text-white duration-300"
        onClick={onBack}
      />
      {/* Konten */}
      <div className="flex md:flex-row flex-col justify-between gap-4 mt-8">
        <div className="flex flex-col justify-center items-center gap-4">
          {project.image.length > 1 ? (
            <motion.div
              variants={springVariant}
              initial="initial"
              animate="animate">
              {project.image.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  alt={project.title}
                  className="mb-2 rounded w-md object-fit"
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={springVariant}
              initial="initial"
              animate="animate">
              <img
                src={project.image[0]}
                alt={project.title}
                className="rounded w-md object-fit"
              />
            </motion.div>
          )}

          <div className="flex flex-row justify-around items-center gap-2">
            <motion.div
              variants={springVariant}
              initial="initial"
              animate="animate">
              <Link href={project.github} target="_blank">
                <Button aria-label="Github" variant={"secondary"}>
                  <FaGithub className="w-4 h-4" />
                  <span className="ml-2">View on Github</span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={springVariant}
              initial="initial"
              animate="animate">
              <Link href={project.project} target="_blank">
                <Button aria-label="Project" variant={"secondary"}>
                  <AiFillProject className="w-4 h-4" />
                  <span className="ml-2">View on Project</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <motion.h1
            className="font-bold text-xl"
            variants={springVariant}
            initial="initial"
            animate="animate">
            {project.title}
          </motion.h1>

          <motion.p
            className="text-sm"
            variants={springVariant}
            initial="initial"
            animate="animate">
            {project.description}
          </motion.p>

          <div className="gap-x-2 gap-y-4 grid grid-cols-4 mt-8">
            {project.techStack.map((Tech: React.ComponentType, i: number) => (
              <motion.div
                key={i}
                variants={techStackVariant}
                initial="initial"
                animate="animate"
                custom={i}>
                <Tech />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
