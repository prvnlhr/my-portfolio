import React, { useEffect, useState } from "react";
import styles from "./styles/linkBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Textfit } from "react-textfit";
import FontFaceObserver from "fontfaceobserver";

const LinkBtn = ({ height, label }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      const font = new FontFaceObserver("SharpGroteskSemiBold25");
      try {
        await font.load();
        setIsFontLoaded(true);
      } catch (e) {
        console.error("Font failed to load", e);
      }
    };
    loadFont();
  }, []);
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
