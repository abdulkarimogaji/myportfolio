import Image from "next/image";
import styles from "../styles/project-image.module.css";
const ProjectImage = ({ src }: { src: string }) => {
  return (
    <div className={`w-5/12 ${styles.tiltingCardWrapper} cursor-grab`}>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.tiltingCardBody}>
        <Image src={src} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default ProjectImage;
