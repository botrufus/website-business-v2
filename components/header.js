/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from 'next/link'

const navigation = [
  { name: "HOW IT WORKS", href: "/#how-it-works" },
  { name: "OUR WORK", href: "/#our-work" },
  { name: "THE TEAM", href: "/#the-team" },
  { name: "FAQ", href: "/#faq" },
];

export default function Example() {
  return (
    <nav id="header" className="w-full z-30 top-0 text-white lg:py-6">
      <div className="max-w-7xl container mx-auto flex flex-wrap items-center justify-between ">
        <div className="flex items-center">
          <a
            className="text-black no-underline hover:no-underline font-mono text-2xl lg:text-4xl"
            href="#"
          >
        
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block  lg:mt-0 text-black lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-center flex-1 items-center">
            {navigation.map((item) => (
              <li className="mr-3">
                <Link href={item.href}>
                  <a
                    className="inline-block py-2 px-4 text-black font-mono hover:underline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    key={item.name}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
