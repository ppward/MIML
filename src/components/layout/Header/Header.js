import { useCallback } from "react";
import {useNavigate} from "react-router-dom";
import styles from './Header.css'
const Header=()=>{
    const navigate = useNavigate();// 네비게이션 기능 함수 정의 
    
    // 클릭 시 첫 화면으로 돌아가는 이벤트 처리함수 
    const onAITextClick = useCallback(()=>{
        navigate("/");
    },[navigate]);

    return(
     <section className={styles.parentLinkChild}>
        <div>
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
            <div
            //이미지 추가할 부분 묵마크, 위시리스트, 마이
            >
                <div 
                //북마크
                >
                   북마크 이미지
                </div>
                <div
                //위시리스트
                >
                    위시리스트 이미지
                </div>
                <div
                //마이
                >
                    마이 이미지
                </div>
            </div>
        </div>
     </section> 
    )
}
export default Header;