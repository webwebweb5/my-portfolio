"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  PiArrowLeftThin,
  PiGithubLogoLight,
  PiGlobeLight,
} from "react-icons/pi";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DevBadge } from "@/components/shared/dev-badge";

const badges = [
  {
    name: "ReactJS",
    color: "#3b82f6",
  },
  {
    name: "NodeJS",
    color: "#22c55e",
  },
  {
    name: "MongoDB",
    color: "#22c55e",
  },
];

export function JobifyContentView() {
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
                    href="https://mern-stack-course-jobify.onrender.com/"
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
                    href="https://github.com/webwebweb5/mern-stack-course-jobify"
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
          Jobify
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            Project
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">May 17, 2023</span>
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
            src="/images/jobify.png"
            alt=""
          />

          <h2 className="text-2xl mt-9">What is Jobify?</h2>

          <p className="my-7">
            Jobify is a comprehensive job management website offering users the
            ability to track their job history. Users can effortlessly add,
            edit, delete jobs, and modify their profiles.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg h-80 w-full object-cover object-top"
              src="/images/jobify-main.png"
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
                  Data visualization:
                </strong>{" "}
                See Monthly Applications with Bar Chart and Area Chart
              </li>
              <li>
                <strong className="text-neutral-200">Filter jobs:</strong>{" "}
                Filter jobs using search bar, status, type, and sort by
              </li>
              <li>
                <strong className="text-neutral-200">Add job:</strong>
                Add job using position, company name, location, type of work and
                status
              </li>
              <li>
                <strong className="text-neutral-200">
                  Profile management:
                </strong>{" "}
                Update profile
              </li>
            </ul>
          </div>

          <h2 className="text-2xl">Technology Stack</h2>

          <div className="mt-4 mb-9">
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="space-y-2"
            >
              <li>
                <strong className="text-neutral-200">Frontend:</strong> ReactJS
              </li>
              <li>
                <strong className="text-neutral-200">Backend:</strong> NodeJS &
                ExpressJS
              </li>
              <li>
                <strong className="text-neutral-200">Database:</strong> MongoDB
              </li>
              <li>
                <strong className="text-neutral-200">Authentication:</strong>{" "}
                JWT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
