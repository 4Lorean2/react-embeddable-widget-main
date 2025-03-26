import { useContext, useEffect, useState } from "react";
import { WidgetContext } from "@/widget/lib/context";
import { useMockConfig } from "@/hooks/useMockConfig";

export function WidgetButton() {
  const { setIsOpen } = useContext(WidgetContext);
  const config = useMockConfig();
  const [isVisible, setIsVisible] = useState(false);

  // Saat kontrolü
  useEffect(() => {
    if (!config) return;

    const currentHour = new Date().getHours();
    const [start, end] = config.displayBetween;
    setIsVisible(currentHour >= start && currentHour <= end);
  }, [config]);

  if (!config || !isVisible) return null;

  // Template'e göre buton class'ı
  let buttonStyle = "";

  // ...önceki kod

  switch (config.template) {
    case 1:
      buttonStyle =
        "bg-yellow-400 text-black rounded-full w-14 h-14 flex items-center justify-center text-lg";
      break;
    case 2:
      buttonStyle =
        "bg-blue-500 text-white w-14 h-14 rounded-none flex items-center justify-center text-lg";
      break;
    case 3:
      buttonStyle =
        "bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium";
      break;
    case 4: // 💬 Yeni yazılı yeşil buton
      buttonStyle =
        "bg-green-600 text-white px-4 py-2 rounded-l-xl rounded-r-full shadow-md text-sm font-semibold";
      break;
    default:
      buttonStyle = "bg-gray-400 text-white px-4 py-2 rounded-md"; // fallback
  }

  // ...

  return (
    <button
      className={`fixed bottom-[20px] right-[20px] z-[9999] hover:opacity-90 transition ${buttonStyle}`}
      onClick={() => setIsOpen(true)}
    >
      {config.template === 4
        ? "Bize yazın, çevrimiçiyiz!"
        : config.template === 3
        ? "Destek"
        : "+"}
    </button>
  );
}
