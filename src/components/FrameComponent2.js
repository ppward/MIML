import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  prop,
  prop1,
  prop2,
  prop3,
  vector,
  propPadding,
  propMinWidth,
  propGap,
  propMinWidth1,
  propDebugCommit,
  propPadding1,
  propDebugCommit1,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const h32Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv6Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth1, propDebugCommit]);

  const frameDiv7Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const vectorIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={styles.parent} style={frameDiv5Style}>
      <h3 className={styles.h3} style={h32Style}>
        {prop}
      </h3>
      <div className={styles.div}>
        <p className={styles.p}>{prop1}</p>
        <p className={styles.p1}>{prop2}</p>
      </div>
      <div className={styles.group} style={frameDiv6Style}>
        <div className={styles.div1} style={div1Style}>
          {prop3}
        </div>
        <div className={styles.vectorWrapper} style={frameDiv7Style}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={vector}
            style={vectorIconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
