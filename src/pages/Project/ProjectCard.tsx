import { Link } from "react-router-dom";
import type { Project } from "./types";
import classes from "../Project/ProjectsList.module.css";
import BidiText from "../../components/BidiText/BidiText";
import { t } from "i18next";

interface Props {
  product: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ product, index }) => {
  return (
    <div className="border p-4">
      <Link to={`/projects/${product.name}`}>
        <li className={classes.item} key={product.name + index}>
          <div className={classes["label-row"]}>
            <BidiText className={classes["project-name"]} forceLtr={true}>
              {t(`${product.name}`)}
            </BidiText>

            <span className={classes.line} />
          </div>
          <div className={classes["image-wrapper"]}>
            <img src={product.src} alt={product.name} />
          </div>
        </li>
      </Link>
    </div>
  );
};

export default ProjectCard;
