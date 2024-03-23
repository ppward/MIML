import FrameComponent2 from "./FrameComponent2";
import FrameComponent10 from "./FrameComponent10";
import ButtonAddToCart from "./ButtonAddToCart";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = () => {
  return (
    <section className={styles.dictionaryWrapper}>
      <div className={styles.dictionary}>
        <div className={styles.treeStructure}>
          <div className={styles.matrixManipulation}>
            <div className={styles.div}>일반 도서</div>
            <div className={styles.sortingAlgo}>
              <div className={styles.div1}>더보기 ▶</div>
            </div>
          </div>
        </div>
        <div className={styles.tagCloud}>
          <div className={styles.encryptionMethod}>
            <div className={styles.decryptionMethod}>
              <div className={styles.logRepository}>
                <div className={styles.processBuilder}>
                  <div className={styles.skipParent}>
                    <img className={styles.skipIcon} alt="" src="/skip.svg" />
                    <img
                      className={styles.image11Icon}
                      loading="lazy"
                      alt=""
                      src="/image-111@2x.png"
                    />
                  </div>
                  <FrameComponent2
                    prop="모모"
                    prop1="미하엘 엔데 (글)"
                    prop2="한미희 (번역)"
                    prop3="13,500원"
                    vector="/vector-41.svg"
                    propPadding="unset"
                    propMinWidth="42.19999999999982px"
                    propGap="20px"
                    propMinWidth1="88px"
                    propDebugCommit="unset"
                    propPadding1="var(--padding-8xs-5) 0px 0px"
                    propDebugCommit1="unset"
                  />
                </div>
                <div className={styles.image5Parent}>
                  <img
                    className={styles.image5Icon}
                    loading="lazy"
                    alt=""
                    src="/image-51@2x.png"
                  />
                  <FrameComponent10
                    prop="미움받을 용기"
                    prop1="기시미 이치로, 고가 후미타케 (글)"
                    prop2="전경아 (번역)"
                    prop3="11,000원"
                    antDesignheartOutlined="/antdesignheartoutlined-3.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonAddToCart}>
                <div className={styles.buttonAddToCartChild} />
                <button className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/rectangle-40.svg"
                  />
                  <div className={styles.div2}>읽으러 가기</div>
                </button>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.div3}>읽으러 가기</div>
                </button>
              </div>
            </div>
            <div className={styles.image12Parent}>
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-121@2x.png"
              />
              <FrameComponent10
                prop="탈무드"
                prop1="샤이니아 (글)"
                prop2="홍순도 (번역)"
                prop3="14,310원"
                antDesignheartOutlined="/antdesignheartoutlined-4.svg"
                propMinWidth="63.5px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <button className={styles.buttonAddToCart1}>
                <div className={styles.buttonAddToCartItem} />
                <div className={styles.buttonAddToCart2}>
                  <div className={styles.buttonAddToCartInner} />
                  <div className={styles.div4}>읽으러 가기</div>
                </div>
              </button>
            </div>
            <div className={styles.encryptionMethodInner}>
              <div className={styles.image6Parent}>
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
                <div className={styles.frameParent}>
                  <div className={styles.parent}>
                    <h3 className={styles.h3}>누가 내 머리에 똥 쌌어?</h3>
                    <div className={styles.div5}>{`베르너 홀츠바르트 `}</div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div6}>9,000원</div>
                    <img
                      className={styles.antDesignheartOutlinedIcon}
                      alt=""
                      src="/antdesignheartoutlined-5.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <button className={styles.buttonAddToCartParent}>
                    <ButtonAddToCart />
                    <div className={styles.div7}>읽으러 가기</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.scrollWrapper}>
            <img className={styles.scrollIcon} alt="" src="/scroll-1.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
