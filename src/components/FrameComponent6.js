import { useMemo } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({
  bookOpen,
  prop,
  propWidth,
  propPadding,
  propColor,
  onBenefictContainerClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const h3Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.bookOpenParent} onClick={onBenefictContainerClick}>
        <img
          className={styles.bookOpenIcon}
          loading="lazy"
          alt=""
          src={bookOpen}
        />
        <div className={styles.wrapper} style={frameDiv1Style}>
          <h3 className={styles.h3} style={h3Style}>
            {prop}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
