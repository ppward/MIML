import { useMemo } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({
  image11,
  prop,
  prop1,
  prop2,
  prop3,
  octahedralOrbit,
  propMinWidth,
  propGap,
  propMinWidth1,
  propPadding,
}) => {
  const h31Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const sphereSymphonyStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const frameDiv4Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.image11Parent}>
      <img className={styles.image11Icon} loading="lazy" alt="" src={image11} />
      <div className={styles.parent}>
        <h3 className={styles.h3} style={h31Style}>
          {prop}
        </h3>
        <div className={styles.div}>
          <p className={styles.p}>{prop1}</p>
          <p className={styles.p1}>{prop2}</p>
        </div>
        <div className={styles.sphereSymphony} style={sphereSymphonyStyle}>
          <div className={styles.div1} style={divStyle}>
            {prop3}
          </div>
          <div className={styles.octahedralOrbitWrapper} style={frameDiv4Style}>
            <img
              className={styles.octahedralOrbitIcon}
              loading="lazy"
              alt=""
              src={octahedralOrbit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
