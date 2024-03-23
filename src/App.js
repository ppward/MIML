import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
import Main1 from "./pages/Main1";
import Main2 from "./pages/Main2";
import Main3 from "./pages/Main3";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/main1":
        title = "";
        metaDescription = "";
        break;
      case "/main2":
        title = "";
        metaDescription = "";
        break;
      case "/main3":
        title="";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main1" element={<Main1 />} />
      <Route path="/main2" element={<Main2 />} />
      <Route path="/main" element={<Main />} />
      <Route path="/wishlist" element={<Main3/>}/>
      <Route path="/read" element={<Frame />} />
      <Route path="/1" element={<Frame1 />} />
    </Routes>
  );
}
export default App;
