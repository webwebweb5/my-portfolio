"use client";
import React from "react";
import {
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
  PiEnvelopeLight,
  PiTerminalWindowFill,
  PiPhoneCallLight,
  PiGithubLogoLight,
  PiMapPinLight,
  PiLinkedinLogoLight,
} from "react-icons/pi";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DevBadge } from "@/components/shared/dev-badge";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------

const numberOfProjects = 3;

// ----------------------------------------------------------------------

export function LeftSectionView() {
  const pathname = usePathname()

  const isDashboard = pathname === "/dashboard"

  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className={`${isDashboard ? "block" : "hidden md:block" } w-full md:w-80 h-fit md:sticky top-4`}
        // className="block w-full md:w-80 h-fit md:sticky top-4"
      >
        <div className="md:w-80 w-full p-4 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]">
          <div className="flex">
            <div className="w-full">
              <Image
                height={250}
                width={250}
                className="w-28 h-28 rounded-full aspect-square object-cover object-top"
                src="/images/profile.jpg"
                alt="profile"
              />
              <h1 className="font-bold text-xl text-neutral-300 mt-3">
                Phiriyakorn Maneekongrit
              </h1>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2 hover:scale-[1.025] duration-500 transition-all">
                <PiPhoneCallLight />
                <span className="text-xs">(+66) 95-450-1590</span>
              </div>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2 hover:scale-[1.025] duration-500 transition-all">
                <PiEnvelopeLight />
                <Link href="mailto:phiriyakorn@gmail.com" className="text-xs">
                  phiriyakorn@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2 hover:scale-[1.025] duration-500 transition-all">
                <PiMapPinLight />
                <span className="text-xs">Chiang Mai, Thailand</span>
              </div>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2 hover:scale-[1.025] duration-500 transition-all">
                <PiLinkedinLogoLight />
                <Link
                  href={"https://www.linkedin.com/in/phiriyakorn/"}
                  className="text-xs"
                  target="_blank"
                >
                  linkedin.com/in/phiriyakorn
                </Link>
              </div>
            </div>

            <div className="flex gap-1 w-full h-fit justify-end">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full h-7 w-7 bg-neutral-700/50"
                asChild
              >
                <Link href={"/"}>
                  <PiHouseLight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="rounded-full h-7 w-7 bg-neutral-700/50"
                asChild
              >
                <Link href={"https://github.com/webwebweb5"} target="_blank">
                  <PiGithubLogoLight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-wrap gap-1.5 text-xs mt-4 mb-2">
              <DevBadge name="ReactJS" color="#3b82f6" />
              <DevBadge name="NextJS" color="#6b7280" />
              <DevBadge name="NodeJS" color="#22c55e" />
              <DevBadge name="GO" color="#60a5fa" />
            </div>
          </div>

          <div className="w-full mt-2 text-neutral-300">
            <h2 className="font-bold my-4">About Me</h2>
            <p className="text-[12px] font-regular my-3">
              Crafting seamless full-stack web experiences, turning ideas into
              polished, responsive apps with creativity and precision.
            </p>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-regular">
                  Full-stack developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="text-xs font-regular">{numberOfProjects} Projects</span>
              </div>
            </div>

            <hr className="border border-[#282828] text-neutral-300 my-6" />

            <div className="mt-4">
              <div>
                <h1 className="font-bold">Work Experiences</h1>
                <div className="mt-7 flex justify-between">
                  <div className="flex gap-x-3">
                    <PiTerminalWindowFill className="w-6 h-6" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-medium">Freelance</h3>
                      <p className="text-[9px] text-neutral-400">Zomsan Tech</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    Jan, 2023 - Current
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
