import styles from "./styles/linkBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Textfit } from "react-textfit";

const LinkBtn = ({ height, label, linkHref }) => {
  return (
    <button
      type="button"
      className={styles.linkbtn}
      style={{
        "--btn-height": `${height}px`,
      }}
    >
      <a
        href={linkHref || "/"}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkWrapper}
      >
        <div className={styles.linkLabelContainer}>
          {/* <div className={styles.linkLabelDiv}> */}
          <Textfit
            mode="single"
            min={0.2}
            style={{
              width: "100%",
              height: "100%",
              // border: "1px solid blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{label}</p>
          </Textfit>
          {/* </div> */}
        </div>
        <div className={styles.linkIconContainer}>
          <div className={styles.linkIconDiv}>
            <Icon
              icon="icon-park-outline:arrow-right"
              className={styles.linkIcon}
            />
          </div>
        </div>
      </a>
    </button>
  );
};

export default LinkBtn;
