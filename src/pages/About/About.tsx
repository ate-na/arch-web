import { useTranslation } from "react-i18next";
import { aboutData } from "../../data/about";
import classes from "../About/About.module.css";
import parse from "html-react-parser";

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const data = aboutData.find((e) => e.lang === lang);
  if (!data) return null;

  return (
    <section className={classes["about-wrapper"]}>
      <div className={classes["about-content"]}>
        <h2>{t("About")}</h2>
        <p>{parse(data.description)}</p>
        <a href={`mailto:${data.email}`} className={classes.email}>
          {data.email}
        </a>

        <div className={classes.phones}>
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
          <div className={classes.worker} key={index}>
            <p>
              <span className={classes["name-worker"]}>{e.name} ,</span>
              <span className={classes["description-worker"]}>
                {e.description}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <img src={data.image} />
      </div>
    </section>
  );
};

export default About;
