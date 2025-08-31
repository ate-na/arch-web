import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ContactPopupProvider } from "./store/ContactPopupProvider";
import ContactPopupUpdater from "./store/ContactPopupUpdater";
import ContactPopup from "./components/Popup/ContactPopup";
import AppRoutes from "./routes/AppRoute";
import useIsMobile from "./hooks/useIsMobile";
import PhonePopup from "./components/Popup/PhonePopup";
import { HomeModalProvider } from "./store/HomeModalProvider";
import { ProjectProvider } from "./store/ProjectProvider";

function App() {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const isEnglish = window.location.pathname.startsWith("/en");
    i18n.changeLanguage(isEnglish ? "en" : "fa");

    document.documentElement.lang = isEnglish ? "en" : "fa";
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  }, [window.location.pathname, i18n]);

  return (
    <div className="container" lang={i18n.language}>
      <BrowserRouter>
        <ContactPopupProvider>
          <ContactPopupUpdater />
          <ProjectProvider>
            <HomeModalProvider>
              <AppRoutes isMobile={isMobile} />
            </HomeModalProvider>
          </ProjectProvider>
          <ContactPopup />
          <PhonePopup />
        </ContactPopupProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
