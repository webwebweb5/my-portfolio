"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiArrowLeftThin, PiGithubLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DevBadge } from "@/components/shared/dev-badge";

const badges = [
  {
    name: "Senior Project",
    color: "#eab308",
  },
  {
    name: "NextJS",
    color: "#6b7280",
  },
  {
    name: "Spring Boot",
    color: "#16a34a",
  },
];

export function QuestifyContentView() {
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

              <Button
                variant="secondary"
                className="h-8 rounded-md px-3 text-xs"
                asChild
              >
                <Link
                  href="https://github.com/webwebweb5/questify-frontend-new"
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
          Questify
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            Project
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Sunday, July 22, 2023</span>
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
            className="rounded-lg h-72 w-full object-cover"
            src="/images/questify.png"
            alt=""
          />

          <h2 className="text-2xl mt-9">What is Questify?</h2>

          <p className="my-7">
            Questify is an AI-driven laboratory platform aimed at
            revolutionizing software engineering education. It provides a
            cloud-based, interactive platform for students and professors,
            offering a seamless and efficient environment to conduct laboratory
            activities for courses like Algorithms Design, Object-Oriented
            Programming, and more.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg h-72 w-full object-cover object-top"
              src="/images/questify-dashboard-page.png"
              alt=""
            />
          </div>

          <h2 className="text-2xl">Features Overview</h2>

          <div className="mt-4 mb-9">
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="space-y-2"
            >
              <li>
                <strong className="text-neutral-200">
                  CMU OAuth Integration:
                </strong>{" "}
                Secure authentication through Chiang Mai University's OAuth
                service.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Multi-language Code Compiler:
                </strong>{" "}
                Supports Java, Python, and JavaScript for coding and testing.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Versioning Question System:
                </strong>{" "}
                Allows professors to create multiple versions of assignments.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Laboratory Management System:
                </strong>{" "}
                Professors can design labs, manage assignments, and set test
                cases.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Logging and Activity Restrictions:
                </strong>{" "}
                Tracks user activity with restrictions on certain actions during
                labs.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Assessment Time Analysis & Score Management:
                </strong>{" "}
                Provides detailed insights into students' performance.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Code Similarity Check:
                </strong>{" "}
                Detects plagiarism by comparing student submissions.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Peer Support Request:
                </strong>{" "}
                Facilitates peer-to-peer help within the platform.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl">User Experience and Design</h2>

          <p className="mt-4 mb-9">
            The platform is designed to be intuitive and user-friendly,
            providing tools for both professors and students to interact with
            the system seamlessly. It supports multi-language programming
            environments and offers real-time feedback on coding assignments.
            The interface allows for efficient lab management, including
            assignment creation, tracking, and evaluation.
          </p>

          <h2 className="text-2xl">Technology Stack</h2>

          <p className="mt-4 mb-9">
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="space-y-2"
            >
              <li>
                <strong className="text-neutral-200">Frontend:</strong> Next.js
              </li>
              <li>
                <strong className="text-neutral-200">Backend:</strong> Spring
                Boot
              </li>
              <li>
                <strong className="text-neutral-200">Database:</strong> MySQL
              </li>
              <li>
                <strong className="text-neutral-200">Authentication:</strong>{" "}
                CMU OAuth, integrated for secure user login and identity
                management.
              </li>
              <li>
                <strong className="text-neutral-200">Infrastructure:</strong>{" "}
                Hosted on Microsoft Azure, providing cloud-based scalability and
                performance.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
