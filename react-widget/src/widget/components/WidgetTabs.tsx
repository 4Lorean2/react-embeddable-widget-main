import { useTab, TabType } from "@/widget/lib/TabContext";

const tabList: { id: TabType; label: string }[] = [
  { id: 1, label: "🏠" },
  { id: 2, label: "💬" },
  { id: 3, label: "🔢" },
  { id: 4, label: "👤" },
];

export function WidgetTabs() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div className="flex justify-around border-t border-gray-200">
      {tabList.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-2 text-xl transition ${
            activeTab === tab.id ? "text-indigo-600 font-bold" : "text-gray-400"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
