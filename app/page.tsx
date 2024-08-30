import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

export default function Home() {
  return (
    <main>
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto w-full">
        <Image
          height={250}
          width={250}
          className="rounded-full aspect-square object-cover object-top"
          objectFit="cover"
          src="/images/profile.jpg"
          alt="profile"
        />
        <h1 className="font-bold text-6xl text-center my-8 text-glowing">
          Phiri&rsquo; Portfolio
        </h1>

        <p className="text-neutral-500 max-w-lg text-center dark:text-neutral-400">
          As a college student pursuing a degree in web development, I am
          extremely passionate about creating innovative and visually appealing
          websites and applications.
        </p>
      </div>

      <div className=" flex justify-center">
        <div className="fixed bottom-10 flex border border-neutral-600 rounded-lg p-2 gap-2 text-neutral-500">
          <Button variant="ghost" size="icon" asChild>
            <Link href={"/dashboard"}>
              <PiHouseLight className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href={"https://github.com/webwebweb5"} target="_blank">
              <PiGithubLogoLight className="h-6 w-6" />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
