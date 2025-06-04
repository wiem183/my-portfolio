import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import Button from "../Button";
import data from "../../data/portfolio.json";
import { portfolioData } from "./portfolioData";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const {
    name,
    showBlog,
    showResume,
    headerTaglineOne,
    headerTaglineTwo,
    headerTaglineThree,
    headerTaglineFour,
  } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Version mobile/tablette */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link cursor-pointer"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && mounted && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="Toggle theme"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu toggle"
                  />
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>Resume</Button>
                  )}
                  <Button onClick={() => window.open("mailto:wiem.errouissi@esprit.tn")}>
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={() => router.push("/")}>Home</Button>
                  {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>Resume</Button>
                  )}
                  <Button onClick={() => window.open("mailto:wiem.errouissi@esprit.tn")}>
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Version desktop */}
      <div
        className={`mt-10 hidden flex-col items-center justify-center tablet:flex ${
          theme === "light" ? "bg-white" : ""
        } dark:text-white`}
      >
        {/* Image de profil */}
        <img
          src={portfolioData.profileImage}
          alt="Wiem's Profile"
          className="h-[200px] w-[200px] rounded-full object-cover"
        />

        {/* Texte sous l'image */}
        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold">{headerTaglineOne}</h1>
          <h2 className="text-2xl">{headerTaglineTwo}</h2>
          <h3 className="text-xl text-gray-400">{headerTaglineThree}</h3>
          <p className="text-md text-gray-500">{headerTaglineFour}</p>
        </div>

        {/* Navigation */}
        {!isBlog ? (
          <div className="flex items-center space-x-2 mt-4">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
            {showResume && (
              <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:wiem.errouissi@esprit.tn")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Toggle theme"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-2 mt-4">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
            {showResume && (
              <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:wiem.errouissi@esprit.tn")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Toggle theme"
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
