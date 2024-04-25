import { useEffect, useState } from "react";
import { Content } from "../Data/Content";
import "./Style.css";
const content = Content;

export default function Page2() {
  const [page, setPage] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const cont = document.getElementById("cont-language");
    function handleScroll1() {
      if (cont) {
        setScrollPos(cont.scrollTop);
      }
    }
    cont?.addEventListener("scroll", handleScroll1);
  }, []);

  useEffect(() => {
    const pageLanguage = document.getElementById("page-language");
    if (pageLanguage) {
      if (
        scrollPos >
        pageLanguage.offsetHeight * (page + 1) - pageLanguage.offsetHeight / 2
      ) {
        setPage(page + 1);
      }
      if (
        scrollPos <
        pageLanguage.offsetHeight * page - pageLanguage.offsetHeight / 2
      ) {
        setPage(page - 1);
      }
    }
  }, [scrollPos]);

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div className="container-language-mask"></div>
      <div id="cont-language" className="container-language">
        {content.map((item, index) => (
          <div key={index}>
            <div
              id="page-language"
              className={`${
                index === page ? "current-language" : "noncurrent-language"
              } page-language`}
            >
              <div className="text-language">
                <p className="title-language">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "relative" }}>
        {content.map((item, index) => (
          <div
            key={index}
            className={`logo ${
              (page === index ? "logo-show " : "") ||
              (page !== index &&
                (index < page
                  ? "logo-disappear-top"
                  : "" || index > page
                  ? "logo-disappear-bottom"
                  : ""))
            }`}
          >
            {item.image}
          </div>
        ))}
      </div>
    </div>
  );
}
