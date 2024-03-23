import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent20.module.css";

const FrameComponent20 = () => {
  const navigate = useNavigate();

  const onAITextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onOnoffContainerClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <header className={styles.navitationBar1Parent}>
      <div className={styles.navitationBar1}>
        <div className={styles.navitationBar1Child} />
        <div className={styles.navitationBar1Inner}>
          <div className={styles.musicOnOffToggleParent}>
            <div className={styles.musicOnOffToggle}>
              <div className={styles.ai} onClick={onAITextClick}>
                AI 도서관
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.weLoveBooks}>We love books</div>
            </div>
            <div className={styles.musicOnOffToggle1}>
              <div className={styles.div}>현재 도서: 총 균 쇠</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.aiWrapper}>
                <div className={styles.ai1}>AI 음악</div>
              </div>
              <div className={styles.onoff}>
                <div className={styles.onoffChild} />
                <div className={styles.onoffItem} />
                <div className={styles.on}>on</div>
                <div className={styles.offWrapper}>
                  <div className={styles.off}>off</div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.aiContainer}>
                <div className={styles.ai2}>AI 이미지</div>
              </div>
              <div className={styles.onoff1} onClick={onOnoffContainerClick}>
                <div className={styles.onoffInner} />
                <div className={styles.ellipseDiv} />
                <div className={styles.on1}>on</div>
                <div className={styles.offContainer}>
                  <div className={styles.off1}>off</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <input
            className={styles.frameItem}
            placeholder="AI에게 줄거리 물어보기"
            type="text"
          />
          <div className={styles.mainSearch}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search1.svg"
            />
          </div>
        </div>
        <div className={styles.storyContainerParent}>
          <div className={styles.storyContainer}>
            <img
              className={styles.storyContainerChild}
              loading="lazy"
              alt=""
              src="/group-19.svg"
            />
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.emotionCircle}>
            <div className={styles.heartInstanceLabelParent}>
              <div className={styles.heartInstanceLabel} />
              <div className={styles.heartParent}>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src="/heart1.svg"
                />
                <div className={styles.div1}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.lineDiv} />
        </div>
        <img
          className={styles.userIcon}
          loading="lazy"
          alt=""
          src="/user.svg"
        />
      </div>
      <div className={styles.frameChild1} />
    </header>
  );
};

export default FrameComponent20;
