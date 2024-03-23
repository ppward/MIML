import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const onAITextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={styles.parentLinkWrapper}>
      <div className={styles.parentLink}>
        <div className={styles.navitationBar1Parent}>
          <div className={styles.navitationBar1}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.navitationBar1Child} />
            <div className={styles.childCount}>
              <div className={styles.connectionManager}>
                <div className={styles.aiWrapper}>
                  <div className={styles.ai} onClick={onAITextClick}>
                    AI 도서관
                  </div>
                </div>
                <div className={styles.merger}>
                  <div className={styles.mergerChild} />
                  <div className={styles.weLoveBooks}>We love books</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <input
                className={styles.frameChild}
                placeholder="제목, 저자, 장르 검색하기"
                type="text"
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
            <div className={styles.traversalPath}>
              <div className={styles.privacyPolicy}>Privacy policy</div>
            </div>
            <div className={styles.navitationBar1Inner}>
              <div className={styles.warrantyParent}>
                <div className={styles.warranty}>Warranty</div>
                <div className={styles.farthestDescendant}>
                  <div className={styles.shippping}>Shippping</div>
                </div>
                <div className={styles.returns}>Returns</div>
              </div>
            </div>
            <div className={styles.parentage}>
              <div className={styles.subtreeDepth}>
                <div className={styles.subtreeDepthInner}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-19.svg"
                  />
                </div>
                <div className={styles.leafDistance}>
                  <div className={styles.edgeWeight} />
                </div>
                <div className={styles.playingFieldWrapper}>
                  <div className={styles.playingField}>
                    <div className={styles.shortestPath} />
                    <div className={styles.heartParent}>
                      <img
                        className={styles.heartIcon}
                        loading="lazy"
                        alt=""
                        src="/heart.svg"
                      />
                      <div className={styles.radius}>3</div>
                    </div>
                  </div>
                </div>
                <div className={styles.connectedComponents} />
              </div>
            </div>
          </div>
          <div className={styles.componentSize} />
          <img
            className={styles.userIcon}
            loading="lazy"
            alt=""
            src="/user.svg"
          />
        </div>
        <div className={styles.connectivity}>
          <div className={styles.treeShape}>
            <div className={styles.treeStability}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/rectangle-7.svg"
                />
                <div className={styles.div}>인기 도서</div>
              </div>
            </div>
            <div className={styles.treeDensity}>
              <div className={styles.div1}>신작</div>
            </div>
            <div className={styles.treeDensity1}>
              <div className={styles.div2}>남성 인기</div>
            </div>
            <div className={styles.treeDensity2}>
              <div className={styles.div3}>여성 인기</div>
            </div>
            <div className={styles.treeDensity3}>
              <div className={styles.div4}>판타지</div>
            </div>
            <div className={styles.treeDensity4}>
              <div className={styles.div5}>현판</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div6}>무협</div>
            </div>
            <div className={styles.treeDensity5}>
              <div className={styles.div7}>드라마</div>
            </div>
            <div className={styles.treeDensity6}>
              <div className={styles.div8}>로판</div>
            </div>
            <div className={styles.treeDensity7}>
              <div className={styles.div9}>로맨스</div>
            </div>
          </div>
        </div>
        <img className={styles.parentLinkChild} alt="" src="/line-11.svg" />
      </div>
    </section>
  );
};

export default Header;
