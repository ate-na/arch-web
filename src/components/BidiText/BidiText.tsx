// src/components/BidiText/BidiText.tsx
import { useTranslation } from "react-i18next";
import classes from "./BidiText.module.css";
import type { CSSProperties, ReactNode } from "react";

interface BidiTextProps {
  children: ReactNode;
  forceLtr?: boolean;
  forceRtl?: boolean;
  className?: string;
}

const BidiText: React.FC<BidiTextProps> = ({
  children,
  forceLtr = false,
  forceRtl = false,
  className = "",
}) => {
  const { i18n } = useTranslation();

  const getDirection = (): "ltr" | "rtl" => {
    if (forceLtr) return "ltr";
    if (forceRtl) return "rtl";
    return i18n.language === "fa" ? "rtl" : "ltr";
  };

  const style: CSSProperties = {
    direction: getDirection(),
    textAlign: getDirection() === "ltr" ? "left" : "right",
    unicodeBidi: "embed",
    display: "inline-block", // اطمینان از رفتار صحیح
  };

  return (
    <span className={`${classes.bidiText} ${className}`} style={style}>
      {children}
    </span>
  );
};

export default BidiText;
