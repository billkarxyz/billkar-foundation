import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiBootstrap,
  SiExpress,
  SiNestjs,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa6";

export default function Skills() {
  // Expanded skills array
  const skills = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiPython, name: "Python", color: "text-blue-500" },
    { icon: FaJava, name: "Java", color: "text-orange-600" },
    { icon: SiPhp, name: "PHP", color: "text-blue-600" },
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiReact, name: "React Native", color: "text-cyan-400" },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-100 dark:text-gray-300",
    },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { icon: SiExpress, name: "Express", color: "text-gray-100" },
    { icon: SiNestjs, name: "NestJS", color: "text-red-600" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { icon: DiMsqlServer, name: "Microsoft SQL", color: "text-red-600" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiGit, name: "Git", color: "text-orange-600" },
    { icon: SiHtml5, name: "HTML", color: "text-orange-600" },
    { icon: SiCss3, name: "CSS", color: "text-blue-600" },
  ];

  return (
    <div className="mt-2 w-full">
      <div className="gap-2 grid grid-cols-3 md:grid-cols-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col justify-center items-center bg-gray-100/20 dark:bg-gray-800/30 p-2 rounded-lg cursor-pointer pointer-events-auto">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}>
              <skill.icon className={`w-5 h-5 ${skill.color}`} />
            </motion.div>
            <span className="mt-1 font-medium text-xs">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
