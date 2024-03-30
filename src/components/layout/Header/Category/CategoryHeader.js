import styles from "./CategoryHeader.module.css"
const CategoryHeader=()=>{

    return(
        <div className={styles.categoryBody} >
            <div className={styles.categoryItem}>인기도서</div>
            <div className={styles.categoryItem}>신작</div>
            <div className={styles.categoryItem}>남성인기</div>
            <div className={styles.categoryItem}>여성인기</div>
            <div className={styles.categoryItem}>판타지</div>
            <div className={styles.categoryItem}>현판</div>
            <div className={styles.categoryItem}>로판</div>
            <div className={styles.categoryItem}>로맨스</div>
        </div>
    )
}
export default  CategoryHeader;