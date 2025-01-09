"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./navigation.css";
import { ImageBasePath } from "../image";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MOBILE_BREAKPOINT } from "@/constants/breakpoints";

interface IPage {
  name: string;
  path: string;
}

export const Navigation = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      document.getElementById("menu-container")!.style.right = "0%";
      document.getElementById("menu")!.style.opacity = "100%";
      // might be nicer to transition on the opacity then just display none that shit...
      // or also could be nice to keep it if it's at the top...
      // I think playing with the Z-index could fix this?
      document.getElementById("nav-logo")?.classList.add("hide");
    } else {
      setBurgerClass("burger-bar unclicked");
      document.getElementById("menu-container")!.style.right = "-100%";
      document.getElementById("menu")!.style.opacity = "0%";
      document.getElementById("nav-logo")?.classList.remove("hide");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const pages: IPage[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const currentPath = usePathname();
  const windowWidth = useWindowSize();

  const resetPage = () => {
    if (windowWidth < MOBILE_BREAKPOINT) updateMenu();
    window.scrollTo(0, 0);
  };

  return (
    <header className="navigation-container sticky-navigation-container">
      <nav>
        <div className="desktop-menu">
          <Link href={"/"}>
            <ImageBasePath
              src={"/logo.png"}
              width={120}
              height={28}
              alt="Next.js logo"
            />
          </Link>
          <ul className="link-list">
            {pages.map((page) => {
              return (
                <li key={page.name}>
                  <Link
                    className={currentPath === page.path ? "link-active" : ""}
                    href={page.path}
                    onClick={() => resetPage()}
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div id="menu-container">
        <ul className="menu" id="menu">
          {pages.map((page) => {
            return (
              <li key={page.name}>
                <Link
                  href={page.path}
                  className="link"
                  onClick={() => resetPage()}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
