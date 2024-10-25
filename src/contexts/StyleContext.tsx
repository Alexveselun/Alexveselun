import React, { createContext, ReactNode } from "react";

// Define the context type
interface StyleContextType {
  isDark: boolean;
  themeColor?: string;
  toggleTheme: () => void;
}

const StyleContext = createContext<StyleContextType | undefined>(undefined);

interface StyleProviderProps {
  value: StyleContextType;
  children: ReactNode;
}

export const StyleProvider: React.FC<StyleProviderProps> = ({ value, children }) => (
  <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
);

export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
