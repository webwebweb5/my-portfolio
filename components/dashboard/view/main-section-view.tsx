"use client";
import React from "react";
import { PiAtLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/shared/project-card";
import { PROJECT_DATA } from "@/constants";
import { ProjectCardProps } from "@/types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export function MainSectionView() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit flex-1"
    >
      <div className="bg-transparent rounded-2xl">
        <div>
          <div className="bg-[#1C1C1C] md:bg-transparent rounded-lg flex gap-x-6 p-4">
            {/* <PiPolygonLight className="text-6xl text-neutral-50" /> */}
            <PiAtLight className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-medium text-neutral-300">
                Journey,{" "}
                <span className="text-sm text-neutral-400">
                  My Cool Projects
                </span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                I design and code beautifully simple things, and <br />
                occasionally i write about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="gap-4 flex flex-col">
            {PROJECT_DATA.map((project: ProjectCardProps, index: number) => (
              <ProjectCard
                key={index}
                imageURL={project.imageURL}
                title={project.title}
                badges={project.badges}
                description={project.description}
                isTop={project.isTop}
              />
            ))}
          </div>

          <div className="my-4 bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 rounded-lg duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div>
                  <div className="w-full text-sm font-medium flex flex-col gap-1">
                    <FaQuoteLeft />
                    <p className="text-center px-6">
                      This was the harshness of reality, and also the beauty of
                      fate. In this world, everyone is a main character, but
                      everyone is also a side character.
                    </p>
                    <FaQuoteRight className="self-end" />
                  </div>
                  <div className="flex items-center gap-x-2 font-bold mt-1">
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      Quote
                    </p>
                    <div className="w-1 h-1 rounded-full bg-neutral-400" />
                    <span className="text-xs">UNKNOWN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
