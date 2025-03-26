import { useContext } from "react";
import { WidgetContext } from "@/widget/lib/context";
import { TabProvider } from "@/widget/lib/TabContext";
import { WidgetTabs } from "./WidgetTabs";
import { WidgetContent } from "./WidgetContent";
import { WidgetButton } from "./WidgetButton";

export function Widget() {
  const { isOpen, setIsOpen } = useContext(WidgetContext);

  if (!isOpen) return <WidgetButton />;

  return (
    <TabProvider>
      <div className="fixed bottom-[20px] right-[20px] w-[320px] h-[400px] bg-white border border-gray-200 rounded-xl shadow-xl z-[9999] flex flex-col">
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <h3 className="text-lg font-semibold text-gray-800">Widget</h3>
          <button
            className="text-sm text-red-500 hover:text-red-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4 text-sm text-gray-700">
          <WidgetContent />
        </div>

        <WidgetTabs />
      </div>
    </TabProvider>
  );
}
