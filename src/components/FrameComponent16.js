import { useMemo } from "react";
import styles from "./FrameComponent16.module.css";

const FrameComponent16 = ({
  prop,
  antDesignheartOutlined,
  prop1,
  propPadding,
  propMinWidth,
  propWidth,
  propPadding1,
}) => {
  const frameDiv13Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const h34Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv14Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
    };
  }, [propWidth, propPadding1]);

  return (
    <div className={styles.frameParent} style={frameDiv13Style}>
      <div className={styles.parent}>
        <h3 className={styles.h3} style={h34Style}>
          {prop}
        </h3>
        <div className={styles.antDesignheartOutlinedParent}>
          <img
            className={styles.antDesignheartOutlinedIcon}
            loading="lazy"
            alt=""
            src={antDesignheartOutlined}
          />
          <div className={styles.div}>
            <p className={styles.p}>{prop1}</p>
            <p className={styles.p1}>강소정 (번역)</p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper} style={frameDiv14Style}>
        <button className={styles.button}>
          <div className={styles.child} />
          <div className={styles.div1}>이어서 보기</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent16;
