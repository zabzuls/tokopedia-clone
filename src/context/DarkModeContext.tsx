"use client"
import {createContext, useState } from "react";
interface DarkModeContextValue {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const DarkModeContext = createContext<DarkModeContextValue | null>(null);
const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;