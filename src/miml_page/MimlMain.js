import Header from '../components/layout/Header/Header.js'
import Footer from '../components/layout/Footer/Footer.js'
import styles from './MimlMain.module.css'
const MimlMain=()=>{
return (
   <div className={styles.main}>
    <Header/>
    <main>
        <h2>나는 메인페이지
        </h2>
    </main>
    <Footer/>
   </div>
)
}
export default MimlMain;