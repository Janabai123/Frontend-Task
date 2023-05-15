import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/frame-component";
import FrameComponent1 from "./pages/frame-component";
import FrameComponent11 from "./pages/frame-component1";
import FrameComponent2 from "./pages/frame-component2";
import { useEffect } from "react";

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
      case "/frame-1711":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1695":
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
    
    <div>
    <FrameComponent />
    <FrameComponent11/>
    <FrameComponent2 />
    </div>
     //<Routes>
      //<Route path="/" element={<FrameComponent />} />
      //<Route path="/frame-1711" element={<FrameComponent1 />} />
      //<Route path="/frame-1695" element={<FrameComponent11 />} />
      //<Route path="/frame-2" element={<FrameComponent2/>}/>
     //</Routes>
  );
}
export default App;
