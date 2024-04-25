"use client";
import "./Style.css";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip, FaLocationDot, FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function LeftContainer() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div className="container-left">
      <div className={`content-left ${visible ? "visible" : ""}`}>
        <Image
          className="profile-img"
          src="/1.jpg"
          width={300}
          height={300}
          alt="1"
        ></Image>
        <div className="name-left-container">Ștețco Claudiu</div>
        <div className="info-line">
          <IoMail />
          <p style={{ fontSize: "0.85vw", marginLeft: "0.5vw" }}>
            stetcoclaudiu1002@gmail.com
          </p>
        </div>
        <div className="info-line">
          <FaPhoneFlip />
          <p style={{ fontSize: "0.85vw", marginLeft: "0.5vw" }}>
            +40754401799
          </p>
        </div>
        <div className="info-line">
          <FaLocationDot />
          <p style={{ fontSize: "0.85vw", marginLeft: "0.5vw" }}>
            Romania, Cluj, Cluj-Napoca
          </p>
        </div>
        <div className="info-line">
          <FaGithub />
          <a
            href="https://github.com/StetcoClaudiu"
            style={{
              fontSize: "0.85vw",
              marginLeft: "0.5vw",
              textDecoration: "none",
              color: "white",
            }}
          >
            https://github.com/StetcoClaudiu
          </a>
        </div>
      </div>
    </div>
  );
}
