"use client";
import { useState } from "react";
import "./navigation.css";
import { ImageBasePath } from "../image";
import nextConfig from "../../../next.config";

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

  return (
    <header className="navigation-container sticky-navigation-container">
      <nav>
        <ImageBasePath
          src={"/next.svg"}
          width={180}
          height={38}
          alt="Next.js logo"
          className="nav-logo"
        />
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div id="menu-container">
        <ul className="menu" id="menu">
          <li>
            <a
              href={nextConfig.basePath}
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={nextConfig.basePath + "/services"}
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href={nextConfig.basePath + "/about"}
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href={nextConfig.basePath + "/contact"}
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
