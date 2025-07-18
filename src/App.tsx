import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useIsMobile from "./hooks/useIsMobile";
import AppRoutes from "./routes/AppRoute";

function App() {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <div className="container" lang={i18n.language}>
      <BrowserRouter>
        <AppRoutes isMobile={isMobile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
