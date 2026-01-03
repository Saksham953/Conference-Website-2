'use client';

import React, { useState, useEffect, useRef } from "react";
import data from "@/public/data/links.json";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCommitteeOptions, setShowCommitteeOptions] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleCommitteeOptions = () => {
    setShowCommitteeOptions((prev) => !prev);
  };

  // Close navbar if clicked outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
      setShowCommitteeOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar" ref={navbarRef}>
      <div className="logo">
        <Link href="/">
          <Image
            src="/assets/logo.png"   // ✅ FIXED HERE
            width={170}
            height={100}
            alt="Logo"
            priority
          />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`links ${isOpen ? "open" : ""}`}>
        {data.map((link, index) => {
          if (link.name === "Committee") {
            return (
              <div key={index} className="link-container">
                <div className="link" onClick={toggleCommitteeOptions}>
                  {link.name}
                </div>

                {showCommitteeOptions && (
                  <div className="committee-options">
                    <Link href="/AdvisoryCommittee" className="committee-link">
                      Advisory Committee
                    </Link>
                    <Link href="/ProgramCommittee" className="committee-link">
                      Program Committee
                    </Link>
                    {/* <Link href="/OrganizingCommittee" className="committee-link">
                      Organizing Committee
                    </Link> */}
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={index}>
              <Link className="link" href={link.link}>
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
