import Diploma from "../Diploma/Diploma";
import Institute from "../Institute/Institute";

interface AwardDiplomaProps {
  index: number;
}

export default function AwardDiploma({ index }: AwardDiplomaProps) {
  const data1 = [
    {
      type: "Institute",
      title: "Highschool",
      name: "Avram Iancu",
      year: "2018-2021",
      department: "Mathematics and Informatics",
      website: "https://www.avramiancucluj.ro/",
    },
    {
      type: "Institute",
      title: "University",
      name: "Babeș-Bolyai",
      year: "2021-today",
      department: "Informatics in English",
      website: "https://www.ubbcluj.ro/ro/",
    },
    {
      type: "Diploma",
      name: "Olympiad of informatics",
      year: "2018-2019",
      place: "127 National ranking",
      website:
        "http://olimpiada.info/oji2019/index.php?cid=rezultate&w=lic&judet=14&clasa=10",
    },
  ];

  return (
    <div>
      {data1[index].type === "Institute" ? (
        <Institute
          title={data1[index].title}
          name={data1[index].name}
          department={data1[index].department}
          year={data1[index].year}
          website={data1[index].website}
        ></Institute>
      ) : (
        <Diploma
          name={data1[index].name}
          year={data1[index].year}
          place={data1[index].place}
          website={data1[index].website}
        ></Diploma>
      )}
    </div>
  );
}
