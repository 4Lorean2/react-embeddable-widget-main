import { createContext, useContext, useState, ReactNode } from "react";

export type TabType = 1 | 2 | 3 | 4;

interface TabContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TabContext = createContext<TabContextType | null>(null);

export const useTab = () => {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error("TabContext not found");
  return ctx;
};

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>(1);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
