import { useEffect, useState } from "react";
import styles from "./SlideToggler.module.scss";

export const SlideToggler = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: string;
}) => {
  const [darkMode, setDarkMode] = useState(theme === "light" ? false : true);

  useEffect(() => {
    if (theme === "light" && darkMode) {
      setDarkMode(false);
    } else if (theme === "dark" && !darkMode) {
      setDarkMode(true);
    }
  }, [theme]);

  return (
    <label className={styles.inputWrapper}>
      <input className={styles.input}
        type="checkbox"
        onChange={() => {
          toggleTheme();
          setDarkMode(!darkMode);
        }}
        checked={darkMode}
      />
      <span className={styles.slider}/>
    </label>
  );
};
