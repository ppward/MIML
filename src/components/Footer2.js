import FrameComponent from "./FrameComponent";
import styles from "./Footer2.module.css";

const Footer2 = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <FrameComponent
        openMagazine1="/openmagazine-1@2x.png"
        paipal1="/paipal-11@2x.png"
        masterCardLogo19791="/mastercardlogo1979-11@2x.png"
        vISACardLogo1="/visacardlogo-11@2x.png"
        propPadding="var(--padding-11xs) 0px 0px"
        propDebugCommit="unset"
        propDebugCommit1="unset"
        propDebugCommit2="unset"
        propDebugCommit3="unset"
        propDebugCommit4="unset"
        propDebugCommit5="unset"
        propPadding1="0px 1.1999999999989086px 0px var(--padding-7xs)"
      />
      <div className={styles.prototypingStates}>
        <div className={styles.allCopyrightsAre}>
          © All copyrights are reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
