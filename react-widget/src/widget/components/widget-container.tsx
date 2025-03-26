import { useState, useEffect } from "react";
import { WidgetContext } from "../../widget/lib/context";
import { Widget } from "./widget";

interface WidgetContainerProps {
  clientKey: string;
}

export const WidgetContainer = ({ clientKey }: WidgetContainerProps) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Eğer widget yüklenmemişse hiç bir şey render edilmez.
  }

  return (
    <WidgetContext.Provider value={{ isOpen, setIsOpen, clientKey }}>
      <Widget /> {/* Widget'ı render ediyoruz */}
    </WidgetContext.Provider>
  );
};
