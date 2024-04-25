import { useEffect, useState } from "react";
import "./Page3Style.css";
import AwardDiploma from "../AwardDiploma/AwardDiploma";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Page3() {
  const data = [1, 2, 3];

  const [position, setPosition] = useState(0);
  const [currentAward, setCurrentAward] = useState(1);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const cont = document.getElementById("contAwards");
    const award = document.getElementById("award");

    if (cont && award) {
      const width = parseFloat(
        getComputedStyle(award).getPropertyValue("width")
      );
      const margin = parseFloat(
        getComputedStyle(award).getPropertyValue("margin")
      );
      let totalWidth = width + margin * 2;
      cont.scrollLeft = cont.scrollLeft + totalWidth;
    }

    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    const left = document.getElementById("left");
    const right = document.getElementById("right");
    function handleLeft() {
      if (cont && award) {
        const width = parseFloat(
          getComputedStyle(award).getPropertyValue("width")
        );
        const margin = parseFloat(
          getComputedStyle(award).getPropertyValue("margin")
        );
        let totalWidth = width + margin * 2;
        cont.scrollLeft = cont.scrollLeft - totalWidth;
      }
    }
    function handleRight() {
      if (cont && award) {
        const width = parseFloat(
          getComputedStyle(award).getPropertyValue("width")
        );
        const margin = parseFloat(
          getComputedStyle(award).getPropertyValue("margin")
        );
        let totalWidth = width + margin * 2;
        cont.scrollLeft = cont.scrollLeft + totalWidth;
      }
    }
    left?.addEventListener("click", handleLeft);
    right?.addEventListener("click", handleRight);
  }, []);

  useEffect(() => {
    const cont = document.getElementById("contAwards");
    const award = document.getElementById("award");
    let totalWidth = 0;
    if (cont && award) {
      cont.scrollLeft = 0;
      const width = parseFloat(
        getComputedStyle(award).getPropertyValue("width")
      );
      const margin = parseFloat(
        getComputedStyle(award).getPropertyValue("margin")
      );
      totalWidth = width * 2 + margin * 4;
      cont.scrollLeft = totalWidth;
    }
    function handleScroll() {
      if (cont) {
        setPosition(cont.scrollLeft - totalWidth);
      }
    }
    cont?.addEventListener("scroll", handleScroll);
  }, [dimensions]);

  useEffect(() => {
    const cont = document.getElementById("contAwards");
    const award = document.getElementById("award");
    if (cont && award) {
      const width = parseFloat(
        getComputedStyle(award).getPropertyValue("width")
      );
      const margin = parseFloat(
        getComputedStyle(award).getPropertyValue("margin")
      );
      if (position > width + margin * 2 + 4) {
        if (currentAward + 1 < data.length) {
          setCurrentAward(currentAward + 1);
        } else {
          setCurrentAward(0);
        }
        cont.scrollTo({
          left: width * 2 + margin * 4,
        });
      }
      if (position < -(width + margin * 2 + 4)) {
        if (currentAward - 1 >= 0) {
          setCurrentAward(currentAward - 1);
        } else {
          setCurrentAward(data.length - 1);
        }

        cont.scrollTo({
          left: width * 2 + margin * 4,
        });
      }
    }
  }, [position]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p className="TitlePage3">Diplomas and awards</p>
      <div style={{ width: "100%", height: "85%", position: "relative" }}>
        <div id="contAwards" className="contAwards">
          <div id="award" className="award">
            <AwardDiploma
              index={(currentAward + data.length - 2) % data.length}
            />
          </div>
          <div className="award">
            <AwardDiploma
              index={(currentAward + data.length - 1) % data.length}
            />
          </div>
          <div className="award">
            <AwardDiploma index={currentAward} />
          </div>
          <div className="award">
            <AwardDiploma index={(currentAward + 1) % data.length} />
          </div>
          <div className="award">
            <AwardDiploma index={(currentAward + 2) % data.length} />
          </div>
        </div>
        <div className="contAwardsMask"></div>
        <SlArrowLeft id="left" className="left"></SlArrowLeft>
        <SlArrowRight id="right" className="right"></SlArrowRight>
      </div>
    </div>
  );
}
