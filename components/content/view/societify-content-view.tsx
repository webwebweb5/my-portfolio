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
    name: "Vite",
    color: "#9333ea",
  },
  {
    name: "ExpressJS",
    color: "#22c55e",
  },
];

export function SocietifyContentView() {
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
                  <Link href="https://societify.onrender.com/" target="_blank">
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
                    href="https://github.com/webwebweb5/societify"
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
          Societify
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            Project
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Aug 9, 2024</span>
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
            className="rounded-lg h-80 w-full object-cover"
            src="/images/societify/societify-login.png"
            alt=""
          />

          <h2 className="text-2xl mt-9">What is Societify?</h2>

          <p className="my-7">
            Societify is a dynamic social media web app built with a modern tech
            stack, including React.js, Node.js, MongoDB, and Tailwind CSS. It
            offers a seamless user experience with features like JWT
            authentication, React Query for efficient data handling, post
            creation, deletion, and liking/commenting on posts. Users can edit
            profile and cover images, follow suggested users, and receive
            real-time notifications. Societify also supports image uploads via
            Cloudinary and is designed for smooth deployment, making it a robust
            platform for social interaction.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg h-80 w-full object-cover object-top"
              src="/images/societify/societify-main.png"
              alt=""
            />
          </div>

          <h2 className="text-2xl">Features Overview</h2>

          <p className="mt-4 mb-9">
            Societify is a feature-rich social media platform designed to
            enhance online interactions and community engagement. Users can
            create, edit, and delete posts, like and comment, as well as follow
            suggested users to expand their social circle. Additional features
            include profile customization with options to edit profile info,
            cover images, and profile pictures, along with image uploads via
            Cloudinary. Real-time notifications keep users updated, and secure
            authentication through JSON Web Tokens (JWT) ensures privacy and
            security.
          </p>

          <h2 className="text-2xl">User Experience and Design</h2>

          <p className="mt-4 mb-9">
            Societify offers an intuitive, user-friendly interface with sleek
            and modern designs powered by Tailwind CSS, delivering a clean and
            responsive experience across devices. With features like post
            interactions, image uploads, and real-time notifications, users
            enjoy seamless interactions. The app prioritizes ease of use,
            offering effortless profile editing and post management. Users can
            engage with the platform fluidly, with suggestions to follow new
            users and continuous updates that make navigating the platform
            smooth and enjoyable.
          </p>

          <h2 className="text-2xl">Technology Stack</h2>

          <div className="mt-4 mb-9">
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="space-y-2"
            >
              <li>
                <strong className="text-neutral-200">Frontend:</strong> React.js
              </li>
              <li>
                <strong className="text-neutral-200">Backend:</strong> Node.js
                and Express
              </li>
              <li>
                <strong className="text-neutral-200">Database:</strong> MongoDB
              </li>
              <li>
                <strong className="text-neutral-200">Styling:</strong> Tailwind
                CSS
              </li>
              <li>
                <strong className="text-neutral-200">Data Handling:</strong>{" "}
                React Query for Data Fetching and Caching
              </li>
              <li>
                <strong className="text-neutral-200">Authentication:</strong>{" "}
                JSON Web Tokens (JWT)
              </li>
              <li>
                <strong className="text-neutral-200">Image Uploads:</strong>{" "}
                Cloudinary
              </li>
              <li>
                <strong className="text-neutral-200">Deployment:</strong>{" "}
                Deployed on a scalable cloud infrastructure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
