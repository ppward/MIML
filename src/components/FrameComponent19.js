import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent19.module.css";

const FrameComponent19 = () => {
  const navigate = useNavigate();

  const onAITextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.navitationBar1Parent}>
      <div className={styles.navitationBar1}>
        <div className={styles.navitationBar1Child} />
        <div className={styles.navitationBar1Inner}>
          <div className={styles.ancestorLinkParent}>
            <div className={styles.ancestorLink}>
              <div className={styles.ai} onClick={onAITextClick}>
                AI 도서관
              </div>
            </div>
            <div className={styles.familyTree}>
              <div className={styles.subtree} />
              <div className={styles.weLoveBooks}>We love books</div>
            </div>
          </div>
        </div>
        <div className={styles.leafCount}>
          <input
            className={styles.edgeLength}
            placeholder="제목, 저자, 장르 검색하기"
            type="text"
          />
          <div className={styles.parentInfo}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search.svg"
            />
          </div>
        </div>
        <div className={styles.siblingInfo}>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
        <div className={styles.descendantInfo}>
          <div className={styles.linkInfo}>
            <div className={styles.pathInfo}>
              <div className={styles.warranty}>Warranty</div>
              <div className={styles.shippping}>Shippping</div>
            </div>
            <div className={styles.returns}>Returns</div>
          </div>
        </div>
        <div className={styles.cluster}>
          <div className={styles.hierarchy}>
            <div className={styles.graph}>
              <img
                className={styles.graphChild}
                loading="lazy"
                alt=""
                src="/group-19.svg"
              />
            </div>
            <div className={styles.pathway}>
              <div className={styles.pathwayChild} />
            </div>
            <div className={styles.relation}>
              <div className={styles.connectivity}>
                <div className={styles.networkAnalysis} />
                <div className={styles.graphTraversal}>
                  <img
                    className={styles.heartIcon}
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                  <div className={styles.subgraph}>3</div>
                </div>
              </div>
            </div>
            <div className={styles.hierarchyChild} />
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
      <img className={styles.userIcon} loading="lazy" alt="" src="/user.svg" />
    </div>
  );
};

export default FrameComponent19;
