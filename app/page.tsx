"use client";

import CardService from "@/components/CardService";
import {
  FaCoins,
  FaFlask,
  FaGem,
  FaGift,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const services = [
    {
      Icon: FaUsers,
      title: "Ambassador Programs",
      description:
        "Community programs that connect projects with people who help spread the word, test products, and grow the ecosystem.",
    },
    {
      Icon: FaRocket,
      title: "ICO / IDO / IEO",
      description:
        "Token launch support and participation guides for initial coin, DEX, and exchange offerings.",
    },
    {
      Icon: FaGift,
      title: "Airdrops",
      description:
        "Curated airdrop opportunities with step-by-step guidance to help the community claim them safely.",
    },
    {
      Icon: FaFlask,
      title: "Testnets",
      description:
        "Hands-on testnet programs where the community can try new networks and products before they launch.",
    },
    {
      Icon: FaCoins,
      title: "DeFi",
      description:
        "Decentralized finance services and education — from staking and swaps to understanding new protocols.",
    },
    {
      Icon: FaGem,
      title: "NFTs",
      description:
        "NFT programs, collections, and community drops across the networks we work with.",
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

  const steps = [
    {
      title: "Discover",
      description:
        "Browse the programs and opportunities the foundation is running.",
    },
    {
      title: "Participate",
      description:
        "Follow the steps for the program you join — tasks, testnets, or community activities.",
    },
    {
      title: "Stay updated",
      description:
        "Check back for new programs, distributions, and announcements.",
    },
  ];

  return (
    <>
      <p className="mb-4 px-4 leading-relaxed">
        BILLKAR FOUNDATION is a Web3 and crypto services organization. We run
        ambassador programs, token launches, airdrops, testnets, DeFi, and NFT
        initiatives — connecting projects with a community that actually
        participates.
      </p>
      <div className="flex flex-col bg-gray-100/30 dark:bg-gray-700/30 p-4 w-full h-full">
        <h2 className="font-semibold text-2xl">What we do</h2>
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
      <div className="flex flex-col bg-gray-100/30 dark:bg-gray-700/30 p-4 w-full h-full mt-4">
        <h2 className="font-semibold text-2xl">About the foundation</h2>
        <p className="mt-2 px-0 leading-relaxed">
          BILLKAR FOUNDATION helps Web3 projects reach real users and helps
          the community take part in them — from early testnets and ambassador
          programs to token launches and NFT drops. Everything we run is built
          around participation: try the product, complete the tasks, and grow
          with the project.
        </p>
      </div>
      <div className="flex flex-col bg-gray-100/30 dark:bg-gray-700/30 p-4 w-full h-full mt-4">
        <h2 className="font-semibold text-2xl">How it works</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl p-4 rounded-lg">
              <p className="font-semibold text-primary text-lg">
                {index + 1}. {step.title}
              </p>
              <p className="mt-1 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed">
          Explore the services above to find a program that fits you.
        </p>
      </div>
    </>
  );
}
