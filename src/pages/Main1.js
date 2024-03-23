import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent9 from "../components/FrameComponent9";
import Footer1 from "../components/Footer1";
import styles from "./Main1.module.css";

//책 선택 시 
const Main1 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.akarIconscirclePlus} />
      <FrameComponent14 />
      <div className={styles.antDesignheartOutlined} />
      <div className={styles.antDesignheartOutlined1} />
      <div className={styles.antDesignheartOutlined2} />
      <div className={styles.antDesignheartOutlined3} />
      <FrameComponent13 />
      <div className={styles.mainChild} />
      <div className={styles.antDesignheartOutlined4} />
      <FrameComponent12 />
      <FrameComponent11 />
      <FrameComponent9 />
      <Footer1 />
    </div>
  );
};

export default Main1;
