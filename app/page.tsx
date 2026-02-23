"use client";

import CardService from "@/components/CardService";
import {
  AiFillApi,
  AiFillCloud,
  AiFillDatabase,
  AiOutlineDeploymentUnit,
  AiOutlineGateway,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import { HiComputerDesktop, HiDevicePhoneMobile } from "react-icons/hi2";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const services = [
    {
      Icon: HiComputerDesktop,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern frontend frameworks like React.",
    },
    {
      Icon: AiFillDatabase,
      title: "Backend Development",
      description:
        "Designing and developing scalable backend systems using Node.js, Express, and PostgreSQL/MSSQL.",
    },
    {
      Icon: HiDevicePhoneMobile,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile apps using React Native for both Android and iOS.",
    },
    {
      Icon: AiFillApi,
      title: "API Development",
      description:
        "Creating efficient RESTful and GraphQL APIs for seamless integration between frontend and backend systems.",
    },
    {
      Icon: AiFillCloud,
      title: "Database Design & Optimization",
      description:
        "Structuring relational databases with performance in mind and optimizing queries for fast data access.",
    },
    {
      Icon: AiOutlineSecurityScan,
      title: "Authentication & Authorization",
      description:
        "Implementing secure authentication systems, JWT-based login, and role-based access control.",
    },
    {
      Icon: AiOutlineDeploymentUnit,
      title: "DevOps & Deployment",
      description:
        "Deploying applications to production environments, setting up CI/CD pipelines, and configuring Nginx on Windows/Linux servers.",
    },
    {
      Icon: AiOutlineGateway,
      title: "System Integration",
      description:
        "Integrating multiple systems and services such as third-party APIs, payment gateways, and enterprise platforms.",
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300, // kekakuan pegas, semakin tinggi semakin kaku
        damping: 15, // redaman pegas, semakin tinggi semakin lembut
      },
    },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  return (
    <>
      <p className="mb-4 px-4 leading-relaxed">
        Hi there! I'm a fullstack developer who loves working on both backend
        and frontend parts of web apps. I make sure the server runs smoothly
        with clean and efficient code, while also crafting beautiful and
        intuitive interfaces. Whether it's designing APIs or building
        interactive UI, I'm passionate about creating great user experiences
        from end to end.
      </p>
      <div className="flex flex-col bg-gray-100/30 dark:bg-gray-700/30 p-4 w-full h-full">
        <h2 className="font-semibold text-2xl">What i'm doing</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-xl rounded-lg">
              <CardService
                Icon={service.Icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
