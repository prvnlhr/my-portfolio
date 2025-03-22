import styles from "./styles/heroImage.module.scss";
import myImg from "../../assets/porfolio_image.jpg";

const HeroImage = ({ heroImageRef }) => {
  return (
    <div className={styles.imageWrapper} ref={heroImageRef}>
      <img src={myImg} />
    </div>
  );
};

export default HeroImage;
