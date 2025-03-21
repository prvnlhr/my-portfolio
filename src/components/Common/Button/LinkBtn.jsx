import styles from "./styles/linkBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Textfit } from "react-textfit";

const LinkBtn = ({ height, label }) => {
  return (
    <button
      className={styles.linkbtn}
      style={{
        "--btn-height": `${height}px`,
      }}
    >
      <div className={styles.btnInnerContainer}>
        <div className={styles.linkTextDiv}>
          <div className={styles.textInnerDiv}>
            <div className={styles.underLineDiv}></div>
            <Textfit mode="single" style={{ width: "100%", height: "100%" }}>
              <p>{label}</p>
            </Textfit>
          </div>
        </div>
        <div className={styles.btnExpandableDiv}>
          <div className={styles.iconDiv}>
            <Icon
              icon="icon-park-outline:arrow-right"
              className={styles.linkIcon}
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default LinkBtn;
