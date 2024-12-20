import "./Coordinators.css";
import principle from "../../assets/img/principle.jpeg";

const coordinators = [
  {
    name: "Dr. Sanjay Kharat",
    title: "Principal",
    image: principle,
    alt: "Principal_Sir",
  },
  {
    name: "Dr. Swati Kandharkar",
    title: "Vice Principal (Science)",
    image: "./public/img/logo.png",
    alt: "Vice_Principal_Mam",
  },
  {
    name: "Dr. Shubhangi Bhatambrekar",
    title: "HOD (Computer Science)",
    image: "./public/img/logo.png",
    alt: "HOD_Mam",
  },
  {
    name: "Dr. Dipali Meher",
    title: "CEO",
    image: "./public/img/logo.png ",
    alt: "CEO",
  },
  {
    name: "Prof. Prerana Sherla",
    title: "Event Coordinator",
    image: "./public/img/logo.png ",
    alt: "EventCoordinator",
  },
];

const Coordinators = () => {
  return (
    <div className="container1 text-center">
      <h1 className="section-header" style={{ fontWeight: 600 }}>
        Under the guidance of
      </h1>
      <div className="card-deck">
        {coordinators.map((coordinator, index) => (
          <div className="card" key={index}>
            <img
              src={coordinator.image}
              className="card-img-top"
              alt={coordinator.alt}
            />
            <div className="card-body">
              <h4 className="card-title">{coordinator.name}</h4>
              <h5 className="card-text fw-bolder">{coordinator.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordinators;
