    import { useCallback } from "react";
    import {useNavigate} from "react-router-dom";
    import styles from './Header.module.css'
    import CategoryHeader from './Category/CategoryHeader.js'
    import icons from '../../../icons.js'

    const Header=()=>{
        const navigate = useNavigate();// 네비게이션 기능 함수 정의 
        
        // 클릭 시 첫 화면으로 돌아가는 이벤트 처리함수 
        const onAITextClick = useCallback(()=>{
            navigate("/");
        },[navigate]);

        return(
        <section className={styles.parentLinkWrapper}>
            <div className={styles.parentLink}>
                <div onClick={onAITextClick}>
                    AI 도서관
                </div>
                <div>
                    We love books
                </div>
                <div>
                    <input
                    placeholder="제목, 저자 , 장르 검색하기"
                    />
                </div>
                <div>
                    {/*
                    <img // 검색 이미지 들어갈 자리 

                    />
                    */}
                    
                </div> 
                <CategoryHeader/>
                <div className={styles.iconItem}
                //이미지 아이콘 부분
                >
                    <img src={icons.bookmark} alt="bookmark" className={styles.icon}/>
                    <img src={icons.like} alt="like" className={styles.icon}/>
                    <img src={icons.account} alt="account" className={styles.icon}/>
                </div>
            </div>
        </section> 
        )
    }
    export default Header;