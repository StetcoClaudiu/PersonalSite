import "./Institute.css";

interface DiplomaProps {
  title?: string;
  name?: string;
  department?: string;
  year?: string;
  website?: string;
}

export default function Institute({
  title,
  name,
  department,
  year,
  website,
}: DiplomaProps) {
  return (
    <div className="cont-institute">
      <div className="title-institute">{title}</div>
      <div className="name-institute">{name}</div>
      <div className="department-institute">{"Department: " + department}</div>
      <div className="year-institute">Edition: {year}</div>
      <div className="website-institute">Link:</div>
      <a className="website-institute" href={website}>
        {website}
      </a>
    </div>
  );
}
