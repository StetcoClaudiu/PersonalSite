import { useEffect, useState } from "react";
import "./Style.css";
import { SlArrowDown } from "react-icons/sl";

interface Page1Props {
  scrollPos: number;
}

export default function Page1({ scrollPos }: Page1Props) {
  const [hide, setHide] = useState(true);
  const [glow, setGlow] = useState(true);
  useEffect(() => {
    if (scrollPos > 0) {
      setHide(true);
    }
  }, [scrollPos]);

  useEffect(() => {
    setTimeout(() => {
      if (glow) setGlow(false);
      else setGlow(true);
    }, 1000);
  }, [glow]);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 4000);
  }, []);

  return (
    <div className="contPage1">
      <p className="title">My personal page</p>
      <div className="text">
        Greetings, everyone!
        <br /> Today, I'm excited to share my journey in Information Technology
        with you. My name is Stetco Claudiu, and I'm currently studying
        Informatics in English at Babeș-Bolyai University. I'm committed to
        continuous learning in IT. My goal is to understand the latest tech
        trends and contribute meaningfully to the field. I love learning and
        problem-solving in IT. Over the years, I've gained a solid foundation in
        Informatics at Babeș-Bolyai University, where I've learned various
        programming languages and software development skills. I enjoy tackling
        tough challenges and finding creative solutions. I'm passionate about
        exploring new ideas and making a positive impact with technology. This
        presentation aims to showcase my IT journey and dedication to learning
        and improving. My journey in IT is all about passion, perseverance, and
        continuous learning. I'm excited to keep exploring new opportunities and
        making a difference in the tech world.
      </div>

      <div
        className={`scroll-message ${glow ? "glow" : ""} ${hide ? "hide" : ""}`}
      >
        Scroll down
        <SlArrowDown />
      </div>
    </div>
  );
}
