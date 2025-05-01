"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer"
      title={theme === "dark" ? "Light Mode" : "Dark Mode"}
    >
      <Sun className="cursor-pointer rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <Moon className="absolute cursor-pointer rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <div className="sr-only">Toggle Theme</div>
    </Button>
  );
};
export default ThemeSwitcher;
