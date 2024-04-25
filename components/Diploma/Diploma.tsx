import "./Diploma.css";

interface DiplomaProps {
  name?: string;
  year?: string;
  place?: string;
  website?: string;
}

export default function Diploma({ name, year, place, website }: DiplomaProps) {
  return (
    <div className="cont-diploma">
      <div className="title-diploma">Diploma</div>
      <div className="name-diploma">{name}</div>
      <div className="year-diploma">Edition: {year}</div>
      <div className="place-diploma">Place: {place}</div>
      <div className="website-diploma">Link: </div>
      <a className="website-diploma" href={website}>
        {website}
      </a>
    </div>
  );
}
