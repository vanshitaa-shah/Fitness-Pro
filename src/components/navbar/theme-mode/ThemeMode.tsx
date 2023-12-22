import { useEffect, useState } from "react";
import { ReactComponent as LightMode } from "../../../assets/images/dark-light-mode/light-mode.svg";
import { ReactComponent as DarkMode } from "../../../assets/images/dark-light-mode/dark-mode.svg";
import "./ThemeMode.scss";
import { ThemeType } from "../../../types/types";

export const ThemeMode = () => {
  const [mode, setmode] = useState<ThemeType>(
    () => (localStorage.getItem("mode") as ThemeType) || "light"
  );

  useEffect(() => {
    if (mode === "dark") document.documentElement.classList.add("dark");
  }, []);

  const themeHandler = () => {
    const currTheme = mode;
    const newTheme = currTheme === "light" ? "dark" : "light";
    setmode(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("mode", newTheme);
  };
  return (
    <div className="theme-mode" onClick={themeHandler}>
      {mode === "dark" ? <DarkMode /> : <LightMode />}
    </div>
  );
};
