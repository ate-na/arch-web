import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContactPopup } from "./useContactPopup";

const ContactPopupUpdater = () => {
  const location = useLocation();
  const { setCurrentPage, setWasManuallyClosed } = useContactPopup();

  useEffect(() => {
    if (location.pathname.startsWith("/projects")) {
      setCurrentPage("projects");
    } else if (
      location.pathname === "/" ||
      location.pathname.startsWith("/home")
    ) {
      setCurrentPage("home");
    } else if (location.pathname.startsWith("/about")) {
      setCurrentPage("about");
    } else if (location.pathname.startsWith("/blog")) {
      setCurrentPage("blog");
    } else {
      setCurrentPage("other");
    }

    setWasManuallyClosed(false);
  }, [location.pathname, setCurrentPage, setWasManuallyClosed]);

  return null;
};

export default ContactPopupUpdater;
