import styles from "./Footer3.module.css";

const Footer3 = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.connectionManagerParent}>
            <div className={styles.connectionManager}>
              <div className={styles.dataTransformer}>
                <div className={styles.combiner}>
                  <div className={styles.bWorld}>B-World</div>
                  <div className={styles.bookWorld}>
                    <div className={styles.container} />
                    <img
                      className={styles.openMagazine1Icon}
                      loading="lazy"
                      alt=""
                      src="/openmagazine-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.counter}>
                  <div className={styles.timer}>
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
            <div className={styles.calculator}>
              <div className={styles.categories}>{`Categories `}</div>
              <div className={styles.inputProcessor}>
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
            <div className={styles.helpContactsParent}>
              <div className={styles.helpContacts}>{`Help & Contacts `}</div>
              <div className={styles.comparator}>
                <div className={styles.frameGroup}>
                  <div className={styles.phoneWrapper}>
                    <img
                      className={styles.phoneIcon}
                      loading="lazy"
                      alt=""
                      src="/phone.svg"
                    />
                  </div>
                  <div className={styles.accumulator}>+445 87 999 000</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.clockWrapper}>
                    <img
                      className={styles.clockIcon}
                      loading="lazy"
                      alt=""
                      src="/clock.svg"
                    />
                  </div>
                  <div className={styles.moFri9Am}>Mo-Fri, 9 AM to 11 PM</div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.mailWrapper}>
                    <img
                      className={styles.mailIcon}
                      loading="lazy"
                      alt=""
                      src="/mail.svg"
                    />
                  </div>
                  <div className={styles.bworldstorero}>b.world@store.ro</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aggregatorWrapper}>
            <div className={styles.aggregator}>
              <div className={styles.frequencyAnalyzer}>
                <div className={styles.ifYouHaveQuestionsYouCanParent}>
                  <div
                    className={styles.ifYouHave}
                  >{`If you have questions, you can contact us or we will do it for you. `}</div>
                  <button className={styles.ghoustButton}>
                    <div className={styles.requestACall}>Request a call</div>
                  </button>
                </div>
              </div>
              <div className={styles.summarizer}>
                <div className={styles.meanCalculator}>
                  <img
                    className={styles.paipal1Icon}
                    loading="lazy"
                    alt=""
                    src="/paipal-12@2x.png"
                  />
                </div>
                <img
                  className={styles.mastercardLogo19791Icon}
                  loading="lazy"
                  alt=""
                  src="/mastercardlogo1979-1@2x.png"
                />
                <img
                  className={styles.visaCardLogo1Icon}
                  loading="lazy"
                  alt=""
                  src="/visacardlogo-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.allCopyrightsAreReservedWrapper}>
          <div className={styles.allCopyrightsAre}>
            © All copyrights are reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
