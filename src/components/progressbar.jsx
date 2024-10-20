import { Link } from "react-router-dom";
import classes from "../styles/Progress.module.css";
import Progressbutton from "./prgsbutn";

export default function Progressbar() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className={classes.progressBar}>
            <div className={classes.backButton}>
              <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
              <div className={classes.tooltip}>24% Cimplete!</div>
              <div className={classes.rangeBody}>
                <div
                  className={classes.progress}
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <Link to="/result">
              <Progressbutton className={classes.next}>
                <span>Next Question</span>
                <span className="material-icons-outlined"> arrow_forward </span>
              </Progressbutton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
