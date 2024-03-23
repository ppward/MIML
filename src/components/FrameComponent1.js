import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import ButtonAddToCart from "./ButtonAddToCart";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.pentagonPackerWrapper}>
      <div className={styles.pentagonPacker}>
        <div className={styles.octagonalOrchard}>
          <div className={styles.decagonalDome}>
            <div className={styles.div}>일반 도서</div>
            <div className={styles.icosidodecahedral}>
              <div className={styles.div1}>더보기 ▶</div>
            </div>
          </div>
        </div>
        <div className={styles.cylindricalCluster}>
          <div className={styles.dataContainer}>
            <div className={styles.tetrahedronTeem}>
              <div className={styles.hexahedronHuddle}>
                <FrameComponent3
                  image11="/image-11@2x.png"
                  prop="모모"
                  prop1="미하엘 엔데 (글)"
                  prop2="한미희 (번역)"
                  prop3="13,500원"
                  octahedralOrbit="/vector.svg"
                />
                <FrameComponent3
                  image11="/image-5@2x.png"
                  prop="미움받을 용기"
                  prop1="기시미 이치로, 고가 후미타케 (글)"
                  prop2="전경아 (번역)"
                  prop3="11,000원"
                  octahedralOrbit="/vector-4.svg"
                  propMinWidth="unset"
                  propGap="unset"
                  propMinWidth1="84px"
                  propPadding="var(--padding-8xs) 0px 0px"
                />
              </div>
              <div className={styles.buttonAddToCart}>
                <div className={styles.buttonAddToCartChild} />
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.div2}>읽으러 가기</div>
                </button>
                <button className={styles.rectangleGroup}>
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
                src="/image-12@2x.png"
              />
              <FrameComponent2
                prop="탈무드"
                prop1="샤이니아 (글)"
                prop2="홍순도 (번역)"
                prop3="14,310원"
                vector="/vector-4.svg"
              />
              <button className={styles.buttonAddToCart1}>
                <div className={styles.buttonAddToCartItem} />
                <div className={styles.buttonAddToCart2}>
                  <div className={styles.buttonAddToCartInner} />
                  <div className={styles.div4}>읽으러 가기</div>
                </div>
              </button>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.skipParent}>
                <img className={styles.skipIcon} alt="" src="/skip.svg" />
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.parent}>
                  <h3 className={styles.h3}>누가 내 머리에 똥 쌌어?</h3>
                  <div className={styles.div5}>{`베르너 홀츠바르트 `}</div>
                </div>
                <div className={styles.group}>
                  <div className={styles.div6}>9,000원</div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                </div>
              </div>
              <button className={styles.buttonAddToCartParent}>
                <ButtonAddToCart />
                <div className={styles.div7}>읽으러 가기</div>
              </button>
            </div>
          </div>
          <div className={styles.scrollWrapper}>
            <img
              className={styles.scrollIcon}
              loading="lazy"
              alt=""
              src="/scroll-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
