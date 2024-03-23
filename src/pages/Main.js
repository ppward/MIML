import Header from "../components/Header";
import Banner from "../components/Banner";
import AIBookItem from "../components/AIBookItem";;
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import styles from "./Main.module.css";

//엔트리 페이지
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.antDesignheartOutlined} />
      <div className={styles.antDesignheartOutlined1} />
      <div className={styles.antDesignheartOutlined2} />
      <div className={styles.antDesignheartOutlined3} />
      <div className={styles.antDesignheartOutlined4} />
      <div className={styles.antDesignheartOutlined5} />
      <div className={styles.antDesignheartOutlined6} />
      <Header/>
      <div className={styles.mainChild} />
      <Banner />
      <div className={styles.mainItem} />
      <div className={styles.mainInner} />
      <AIBookItem />
      <FrameComponent1 />
      <Footer />
    </div>
  );
};

export default Main; 
