"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiArrowLeftThin, PiGithubLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProjectContentView() {
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
              >
                <PiGithubLogoLight className="mr-2 h-4 w-4" />
                Visit Project
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

        <div className="mt-11 mb-8">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-72 w-full object-cover"
            src="/images/questify.png"
            alt=""
          />

          <h2 className="text-2xl mt-9">What is Questify?</h2>

          <p className="my-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias
            blanditiis officia deserunt, tempore fugit accusantium inventore
            illum ratione cumque, natus dolore at, ipsum eligendi est
            repudiandae ex? Possimus, reiciendis. Quasi enim, nostrum explicabo
            numquam delectus ducimus, unde, tempore obcaecati ab in fugit ut
            eius non aut? Veritatis, enim ad!
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

          <h2 className="text-2xl">Benefit?</h2>

          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias
            blanditiis officia deserunt, tempore fugit accusantium inventore
            illum ratione cumque, natus dolore at, ipsum eligendi est
            repudiandae ex? Possimus, reiciendis. Quasi enim, nostrum explicabo
            numquam delectus ducimus, unde, tempore obcaecati ab in fugit ut
            eius non aut? Veritatis, enim ad!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
