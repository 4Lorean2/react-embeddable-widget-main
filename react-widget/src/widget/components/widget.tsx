import { useContext } from "react";
import { WidgetContext } from "../lib/context";

export function Widget() {
  const { isOpen, setIsOpen } = useContext(WidgetContext);

  if (!isOpen) {
    return (
      <button
        className="fixed bottom-[20px] right-[20px] px-5 py-2.5 
                   bg-indigo-600 text-white text-sm font-medium 
                   border-none rounded-full cursor-pointer z-[9999] 
                   hover:bg-indigo-700 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        Open Widget
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-[20px] right-[20px] w-[320px] h-[400px] 
                 bg-white border border-gray-200 rounded-xl shadow-xl z-[9999]"
    >
      <div
        className="flex justify-between items-center px-4 py-3 
                   border-b border-gray-200 bg-gray-50 rounded-t-xl"
      >
        <h3 className="text-lg font-semibold text-gray-800">Widget Title</h3>
        <button
          className="text-sm text-red-500 hover:text-red-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>

      <div className="p-4 text-sm text-gray-700">
        {/* Your widget content goes here */}
      </div>
    </div>
  );
}
