"use client";
import React from "react";
import {
  PiBookOpenTextLight,
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
  PiEnvelopeLight,
  PiTerminalWindowFill,
  PiPhoneCallThin,
  PiPhoneCallLight,
  PiGithubLogoLight,
  PiMapPinLight,
  PiLinkedinLogoLight,
} from "react-icons/pi";
import { SiAdobe } from "react-icons/si";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/shared/label";
import { Button } from "@/components/ui/button";

export function LeftSectionView() {
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className="hidden md:block w-full md:w-80 h-fit sticky top-5"
      >
        <div className="md:w-80 w-full p-4 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]">
          <div className="flex">
            <div className="w-full">
              <Image
                height={250}
                width={250}
                className="w-28 h-28 rounded-full aspect-square object-cover object-top"
                objectFit="cover"
                src="/images/profile.jpg"
                alt="profile"
              />
              <h1 className="font-bold text-xl text-neutral-300 mt-3">
                Phiriyakorn Maneekongrit
              </h1>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2">
                <PiPhoneCallLight />
                <span className="text-xs">(+66) 95-450-1590</span>
              </div>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2">
                <PiEnvelopeLight />
                <Link href="mailto:phiriyakorn@gmail.com" className="text-xs">
                  phiriyakorn@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2">
                <PiMapPinLight />
                <span className="text-xs">Chiang Mai, Thailand</span>
              </div>

              <div className="flex items-center gap-x-1 font-medium text-neutral-300 mt-2">
                <PiLinkedinLogoLight />
                <Link
                  href={"https://www.linkedin.com/in/phiriyakorn/"}
                  className="text-xs"
                  target="_blank"
                >
                  linkedin.com/in/phiriyakorn
                </Link>
              </div>

              <div className="flex w-full">
                <div className="flex gap-x-1 text-xs mt-4 mb-2">
                  <Label name="ReactJS" />
                  <Label name="NextJS" />
                  <Label name="NodeJS" />
                  <Label name="Go" />
                </div>
              </div>
            </div>

            <div className="flex gap-x-1 w-full h-fit justify-end">
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

          <div className="w-full mt-2 text-neutral-300">
            <h2 className="font-bold my-4">Bio</h2>
            <p className="text-[12px] font-RubikRegular my-3">
              Crafting seamless full-stack web experiences, turning ideas into
              polished, responsive apps with creativity and precision.
            </p>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-RubikRegular">
                  Full-stack developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="text-xs font-RubikRegular">7 Projects</span>
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
