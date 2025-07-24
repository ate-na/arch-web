import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useIsMobile from "./hooks/useIsMobile";
import AppRoutes from "./routes/AppRoute";

function App() {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const isEnglish = location.pathname.startsWith("/en");
    i18n.changeLanguage(isEnglish ? "en" : "fa");

    document.documentElement.lang = isEnglish ? "en" : "fa";
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  }, [location.pathname]);

  return (
    <div className="container" lang={i18n.language}>
      <BrowserRouter>
        <AppRoutes isMobile={isMobile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
