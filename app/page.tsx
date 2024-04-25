import RightContainer from "../components/RightContainer/RightContainer";
import LeftContainer from "@/components/LeftContainer/LeftContainer";
export default function Home() {
  return (
    <div>
      <LeftContainer></LeftContainer>
      <div style={{ marginLeft: "17vw" }}>
        <RightContainer></RightContainer>
      </div>
    </div>
  );
}
