import { useMemo } from "react";
import styles from "./FrameComponent15.module.css";

const FrameComponent15 = ({
  frameDivFlex,
  frameDivAlignSelf,
  aIPadding,
  frameDivPadding,
  frameDivPadding1,
  onAIText1Click,
}) => {
  const frameDiv10Style = useMemo(() => {
    return {
      flex: frameDivFlex,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivAlignSelf]);

  const frameDiv11Style = useMemo(() => {
    return {
      padding: aIPadding,
    };
  }, [aIPadding]);

  const frameInputStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv12Style = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  return (
    <div className={styles.navitationBar1Parent} style={frameDiv10Style}>
      <div className={styles.navitationBar1}>
        <div className={styles.navitationBar1Child} />
        <div className={styles.inputProcessorWrapper} style={frameDiv11Style}>
          <div className={styles.inputProcessor}>
            <div className={styles.outputCollector}>
              <div className={styles.ai} onClick={onAIText1Click}>
                AI 도서관
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.weLoveBooks}>We love books</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <input
            className={styles.frameItem}
            placeholder="제목, 저자, 장르 검색하기"
            type="text"
            style={frameInputStyle}
          />
          <div className={styles.searchWrapper}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search.svg"
            />
          </div>
        </div>
        <div className={styles.privacyPolicyWrapper}>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
        <div className={styles.navitationBar1Inner} style={frameDiv12Style}>
          <div className={styles.warrantyParent}>
            <div className={styles.warranty}>Warranty</div>
            <div className={styles.shipppingWrapper}>
              <div className={styles.shippping}>Shippping</div>
            </div>
            <div className={styles.returns}>Returns</div>
          </div>
        </div>
        <div className={styles.layoutGrid}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <img className={styles.frameInner} alt="" src="/group-19.svg" />
            </div>
            <div className={styles.lineWrapper}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.connectionMakerWrapper}>
              <div className={styles.connectionMaker}>
                <div className={styles.connectionMakerChild} />
                <div className={styles.heartParent}>
                  <img
                    className={styles.heartIcon}
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                  <div className={styles.div}>3</div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild1} />
          </div>
        </div>
      </div>
      <div className={styles.frameChild2} />
      <img className={styles.userIcon} loading="lazy" alt="" src="/user.svg" />
    </div>
  );
};

export default FrameComponent15;
