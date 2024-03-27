import {useEffect} from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType
} from 'react-router-dom'

import MimlMain from "./miml_page/MimlMain";


function App() {
  const action = useNavigationType(); //?
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(()=>{
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  },[action, pathname]) //액션과 pathname이 변경되었을 때 스크롤위치를 맨 위로 되돌리는 기능
  
  return (
    <Routes>
      <Route path="/" element={<MimlMain/>}/>
    </Routes>
  );
}

export default App;
