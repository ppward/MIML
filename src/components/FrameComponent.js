import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  openMagazine1,
  paipal1,
  masterCardLogo19791,
  vISACardLogo1,
  propPadding,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
  propDebugCommit4,
  propDebugCommit5,
  propPadding1,
}) => {
  const frameDiv8Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const phoneIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const div2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const clockIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const moFri9AMStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  const mailIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit4,
    };
  }, [propDebugCommit4]);

  const bworldstoreroStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit5,
    };
  }, [propDebugCommit5]);

  const frameDiv9Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.pathProcessionParent}>
      <div className={styles.pathProcession}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.errorHandlerParent}>
              <div className={styles.errorHandler}>
                <div className={styles.loopController}>
                  <div className={styles.bWorld}>B-World</div>
                  <div className={styles.bookWorld}>
                    <div className={styles.dataMapper} />
                    <img
                      className={styles.openMagazine1Icon}
                      alt=""
                      src={openMagazine1}
                    />
                  </div>
                </div>
                <div className={styles.dataTransformer}>
                  <div className={styles.raphaelfacebookParent}>
                    <img
                      className={styles.raphaelfacebookIcon}
                      loading="lazy"
                      alt=""
                      src="/raphaelfacebook.svg"
                    />
                    <img
                      className={styles.antDesigninstagramFilledIcon}
                      loading="lazy"
                      alt=""
                      src="/antdesigninstagramfilled.svg"
                    />
                  </div>
                </div>
              </div>
              <img
                className={styles.fa6BrandssquareTwitterIcon}
                loading="lazy"
                alt=""
                src="/fa6brandssquaretwitter.svg"
              />
            </div>
            <div className={styles.dataSplitter}>
              <div className={styles.categories}>{`Categories `}</div>
              <div className={styles.dataSubtractor}>
                <div className={styles.psychology}>{`Psychology `}</div>
                <div className={styles.selfHelp}>Self-Help</div>
                <div className={styles.romance}>{`Romance `}</div>
                <div className={styles.mystery}>{`Mystery `}</div>
              </div>
            </div>
            <div className={styles.forKidsParent}>
              <div className={styles.forKids}>For kids</div>
              <div className={styles.gamesParent}>
                <div className={styles.games}>{`Games `}</div>
                <div className={styles.comics}>Comics</div>
                <div className={styles.fantasy}>Fantasy</div>
              </div>
            </div>
            <div className={styles.eBooksParent}>
              <div className={styles.eBooks}>{`E-Books `}</div>
              <div className={styles.fictionParent}>
                <div className={styles.fiction}>{`Fiction `}</div>
                <div className={styles.historical}>Historical</div>
                <div className={styles.horror}>{`Horror `}</div>
              </div>
            </div>
            <div className={styles.inputSelector}>
              <div className={styles.whileLoopHandler}>
                <div className={styles.helpContacts}>{`Help & Contacts `}</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.phoneWrapper} style={frameDiv8Style}>
                  <img
                    className={styles.phoneIcon}
                    alt=""
                    src="/phone.svg"
                    style={phoneIconStyle}
                  />
                </div>
                <div className={styles.div} style={div2Style}>
                  +445 87 999 000
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.clockWrapper}>
                  <img
                    className={styles.clockIcon}
                    alt=""
                    src="/clock.svg"
                    style={clockIconStyle}
                  />
                </div>
                <div className={styles.moFri9Am} style={moFri9AMStyle}>
                  Mo-Fri, 9 AM to 11 PM
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.mailWrapper}>
                  <img
                    className={styles.mailIcon}
                    alt=""
                    src="/mail.svg"
                    style={mailIconStyle}
                  />
                </div>
                <div
                  className={styles.bworldstorero}
                  style={bworldstoreroStyle}
                >
                  b.world@store.ro
                </div>
              </div>
            </div>
          </div>
          <div className={styles.switchController}>
            <div className={styles.tryCatchHandler}>
              <div
                className={styles.tryCatchHandlerInner}
                style={frameDiv9Style}
              >
                <div className={styles.ifYouHaveQuestionsYouCanParent}>
                  <div
                    className={styles.ifYouHave}
                  >{`If you have questions, you can contact us or we will do it for you. `}</div>
                  <button className={styles.ghoustButton}>
                    <div className={styles.requestACall}>Request a call</div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.paipal1Wrapper}>
                  <img
                    className={styles.paipal1Icon}
                    loading="lazy"
                    alt=""
                    src={paipal1}
                  />
                </div>
                <img
                  className={styles.mastercardLogo19791Icon}
                  loading="lazy"
                  alt=""
                  src={masterCardLogo19791}
                />
                <img
                  className={styles.visaCardLogo1Icon}
                  loading="lazy"
                  alt=""
                  src={vISACardLogo1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default FrameComponent;
