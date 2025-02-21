"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isLargeText, setIsLargeText] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Only check system preference for theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setTheme('dark');
      document.body.classList.add("dark");
    } else {
      setTheme('light');
    }

    // Load other preferences from session storage
    const savedTextSize = sessionStorage.getItem("largeText");
    if (savedTextSize === "true") {
      setIsLargeText(true);
      document.body.classList.add("large-text");
    }

    const savedAnimationState = sessionStorage.getItem("isAnimated");
    if (savedAnimationState === "false") {
      setIsAnimated(false);
      document.body.classList.add("reduce-animation");
    }

    const savedHighContrast = sessionStorage.getItem("highContrast");
    if (savedHighContrast === "true") {
      setIsHighContrast(true);
      document.body.classList.add("high-contrast");
    }

    // Add system theme change listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (e.matches) {
        document.body.classList.add("dark");
        setTheme("dark");
      } else {
        document.body.classList.remove("dark");
        setTheme("light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  const resetPreferences = () => {
    if (!mounted) return;

    try {
      // Clear session storage except theme
      const currentTheme = sessionStorage.getItem("theme");
      sessionStorage.clear();
      if (currentTheme) {
        sessionStorage.setItem("theme", currentTheme);
      }
      
      // Remove all classes except theme
      document.body.classList.remove("large-text");
      document.body.classList.remove("high-contrast");
      document.body.classList.remove("reduce-animation");
      
      // Update states
      setIsLargeText(false);
      setIsAnimated(true);
      setIsHighContrast(false);
    } catch (error) {
      console.error("Error resetting preferences:", error);
    }
  };

  const hasPreferencesSet = () => {
    return (
      isLargeText ||
      !isAnimated ||
      isHighContrast
    );
  };

  return (
    <AccessibilityContext.Provider 
      value={{
        theme,
        setTheme,
        isLargeText,
        setIsLargeText,
        isAnimated,
        setIsAnimated,
        isHighContrast,
        setIsHighContrast,
        resetPreferences,
        hasPreferencesSet
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
    