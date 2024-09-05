"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiArrowLeftThin, PiGithubLogoLight, PiGlobeLight } from "react-icons/pi";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DevBadge } from "@/components/shared/dev-badge";

const badges = [
  {
    name: "Vite",
    color: "#9333ea",
  },
  {
    name: "TypeScript",
    color: "#2563eb",
  },
  {
    name: "ExpressJS",
    color: "#22c55e",
  },
];

export function LedgerifyContentView() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="text-neutral-50 "
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="z-50 sticky top-5">
        <div
          className={`mx-auto transition-all duration-500 ease-in-out ${
            isScrolled ? "w-[90%]" : "w-full"
          }`}
        >
          <div className="-mt-4">
            <div className="bg-neutral-700/25 backdrop-blur-md h-12 w-full rounded-xl flex items-center justify-between px-4">
              <Link href={"/dashboard"}>
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <div className="flex gap-2">
                <Button
                  variant="default"
                  className="h-8 rounded-md px-3 text-xs"
                  asChild
                >
                  <Link
                    href="https://ledgerify.vercel.app/"
                    target="_blank"
                  >
                    <PiGlobeLight className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  className="h-8 rounded-md px-3 text-xs"
                  asChild
                >
                  <Link
                    href="https://github.com/webwebweb5/financial-tracker"
                    target="_blank"
                  >
                    <PiGithubLogoLight className="mr-2 h-4 w-4" />
                    Visit Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 mb-4 w-full p-5 border border-neutral-700 rounded-2xl bg-[#1C1C1C] ">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-center "
        >
          Ledgerify
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            Project
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Sep 1, 2024</span>
        </div>

        <div className="w-full flex justify-center items-center mt-8">
          <div className="flex flex-wrap gap-1.5 text-xs mb-2">
            {badges?.map((badge) => (
              <DevBadge
                key={badge.name}
                name={badge.name}
                color={badge.color}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 mb-8">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-80 w-full object-cover object-top"
            src="/images/ledgerify/ledgerify.png"
            alt=""
          />

          <h2 className="text-2xl mt-9">What is Ledgerify?</h2>

          <p className="my-7">
            This financial tracker app helps users manage their income and
            expenses easily. It lets users add transactions, categorize them,
            and track monthly spending with a clear dashboard. Users can view
            financial records, calculate total expenses, and make better
            budgeting decisions. With secure authentication, personal financial
            data is protected, making it easy to stay in control of your
            finances.
          </p>

          <div className="my-9">
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="row-span-2">
                <Image
                  height={1000}
                  width={1000}
                  className="rounded-lg sm:h-full h-80 w-full object-cover object-top"
                  src="/images/ledgerify/ledgerify-main.png"
                  alt=""
                />
              </div>
              <div className="sm:block hidden">
                <Image
                  height={1000}
                  width={1000}
                  className="rounded-lg h-full w-full object-cover object-top"
                  src="/images/ledgerify/ledgerify-analytic.png"
                  alt=""
                />
              </div>
              <div className="sm:block hidden">
                <Image
                  height={1000}
                  width={1000}
                  className="rounded-lg object-cover"
                  src="/images/ledgerify/ledgerify-add-modal.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl">Features Overview</h2>

          <p className="mt-4 mb-9">
            The app offers key features like income and expense tracking,
            categorization of transactions (e.g., rent, food, salary), monthly
            spending summaries, and budgeting insights. Additionally, it
            includes user authentication for data security and real-time
            tracking to ensure users can manage their finances effectively.
          </p>

          <h2 className="text-2xl">User Experience and Design</h2>

          <p className="mt-4 mb-9">
            Designed with ease of use in mind, the app features a clean,
            user-friendly interface. A straightforward dashboard displays
            essential financial data, making it easy for users to navigate and
            track their expenses. The goal was to create a seamless experience
            that helps users quickly input data and view insights without any
            complexity.
          </p>

          <h2 className="text-2xl">Technology Stack</h2>

          <p className="mt-4 mb-9">
            The app is built using Vite for the frontend, Express.js with
            TypeScript for the backend, and Clerk for user authentication. The
            choice of this stack ensures fast performance, maintainable code,
            and secure data handling. The combination of modern tools and
            frameworks provides a solid foundation for scalability and future
            development.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
