import { useTab } from "@/widget/lib/TabContext";
import { WelcomeTab } from "./tabs/WelcomeTab";
import { ChatTab } from "./tabs/ChatTab";
import { CounterTab } from "./tabs/CounterTab";
import { ProfileTab } from "./tabs/ProfileTab";

export function WidgetContent() {
  const { activeTab } = useTab();

  switch (activeTab) {
    case 1:
      return <WelcomeTab />;
    case 2:
      return <ChatTab />;
    case 3:
      return <CounterTab />;
    case 4:
      return <ProfileTab />;
    default:
      return <div>İçerik bulunamadı</div>;
  }
}
