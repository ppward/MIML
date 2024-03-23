import FrameComponent from "./FrameComponent";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <FrameComponent
        openMagazine1="/openmagazine-1@2x.png"
        paipal1="/paipal-1@2x.png"
        masterCardLogo19791="/mastercardlogo1979-1@2x.png"
        vISACardLogo1="/visacardlogo-1@2x.png"
      />
      <div className={styles.dataConverter}>
        <div className={styles.allCopyrightsAreContainer}>
          <p className={styles.allCopyrightsAre}>
            © All copyrights are reserved.
          </p>
          <p className={styles.p}>{` `}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
