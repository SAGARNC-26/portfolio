"use client";
import Link from "next/link";
import Image from "next/image";
import s1 from "@/public/s1.jpg";
import { use } from "react";
import { usePathname } from "next/navigation";
import path from "path";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/project",
  },
  {
    name: "About",
    href: "/about",
  },
];

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sagar-nc-642323294/",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/u/sagarnc/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sagar_nc_26/",
  },

  {
    name: "Github",
    url: "https://github.com/SAGARNC-26",
  },
];

function SideNavigation() {
  const pathname = usePathname();
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg   ">
        {/*} <div className="relative w-28 h-28 overflow-hidden rounded-full flex  items-center justify-center mx-auto">
          <Image
            src="/s1.jpg"
            alt="Sagar's Profile"
            width={120}
            height={50}
            className="object-fill"
            priority
          />
        </div>*/}
        <div className="relative w-20 h-20 overflow-hidden rounded-full mx-auto">
          <Image
            src={s1}
            alt="Sagar's Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center justify-center mx-auto gap-4 font-semibold text-primary-200  ${
                pathname === link.href ? "bg-primary-900 text-primary-100" : ""
              }`}
              href={link.href}
            >
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
        <hr className="h-px my-5 bg-gray-300 border-0" />
        {socials.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center justify-center mx-auto gap-4 font-semibold text-primary-200 ${
                pathname === link.url ? "bg-primary-900 text-primary-100" : ""
              }`}
              href={link.url}
              target="_blank"
            >
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNavigation;
