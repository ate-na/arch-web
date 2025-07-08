import "./About.css";

const data = {
  image: "https://www.that-studio.com/images/koukaki/koukaki-2.jpg",
  description:
    "That Studio is an architectural practice based in Athens. Architecture, lighting, objects and craft, that studio works exploring different disciplines in the field of making.",
  email: ["syavashaps@gmail.com"],
  address: `Agiou NIkolaou 9,11741 Koukaki Athens, Greece`,
  phones: ["+30 210 22 01 978", "+30 216 93 90 837"],
  workers: [
    {
      name: "Anna Vokali",
      description:
        "born in Patras in 1987, is an architect and museum educator. She studied Architecture at the National Technical University of Athens and at École Nationale Supérieure d’Architecture de Paris-La Villette, and worked in architectural firms in Greece, France, Netherlands and Switzerland (Ateliers Jean Nouvel, Dreier Frenzel Architecture + Communication, Burckhardt+Partner). She co founded KidA (2017), a team which designs and implements experimental educational programs, workshops and diverse actions in public space, for museums and other cultural institutes. She is a founding member of that studio since 2020.",
    },
  ],
};

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-content">
        <h2>About</h2>
        <p>{data.description}</p>
        <a href={`mailto:${data.email}`} className="email">
          {data.email}
        </a>

        <div className="phones">
          {data.phones.map((e, index) => {
            return (
              <span key={index}>
                <a href={`tel:${e}`}>{e}</a>
                <br />
              </span>
            );
          })}
        </div>
        {data.workers.map((e, index) => (
          <div className="worker" key={index}>
            <p>
              <span className="name-worker">{e.name} ,</span>
              <span className="description-worker">{e.description}</span>
            </p>
          </div>
        ))}
      </div>
      <img src={data.image} />
    </section>
  );
};

export default About;
