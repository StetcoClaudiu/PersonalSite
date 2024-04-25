"use client";

import { useEffect, useState } from "react";
import "./Style.css";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
export default function RightContainer() {
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(-1);
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    setVisible(page);
    const cont = document.getElementById("cont");
    const page1 = document.getElementById("page1");
    function handleScroll() {
      if (cont && page1) {
        setScrollPos(cont.scrollTop);
        if (scrollPos > (page + 1) * page1.offsetHeight - 100) {
          setPage(page + 1);
          setVisible(page + 1);
        }

        if (scrollPos < page * page1.offsetHeight - 100) {
          setPage(page - 1);
          setVisible(page - 1);
        }
      }
    }

    cont?.addEventListener("scroll", handleScroll);
  }, [page, scrollPos]);
  return (
    <div
      id="cont"
      className="container"
      style={{
        backgroundColor:
          page === 0
            ? "rgb(38, 55, 85)"
            : page === 1
            ? "rgb(94,90,91)"
            : page === 2
            ? "rgb(169,151,111)"
            : "",
      }}
    >
      <div id="page1" className={`page ${visible === 0 ? "visible" : ""}`}>
        {page === 0 && <Page1 scrollPos={scrollPos}></Page1>}
      </div>
      <div className={`page ${visible === 1 ? "visible" : ""}`}>
        <Page2></Page2>
      </div>
      <div className={`page ${visible === 2 ? "visible" : ""}`}>
        {page === 2 && <Page3></Page3>}
      </div>
    </div>
  );
}
