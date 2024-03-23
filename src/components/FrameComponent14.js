import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent15 from "./FrameComponent15";
import styles from "./FrameComponent14.module.css";

const FrameComponent14 = () => {
  const navigate = useNavigate();

  const onAIText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.mainInner}>
      <FrameComponent15 onAIText1Click={onAIText1Click} />
    </div>
  );
};

export default FrameComponent14;
