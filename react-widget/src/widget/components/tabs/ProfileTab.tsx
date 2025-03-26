export function ProfileTab() {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="w-16 h-16 bg-gray-300 rounded-full" />
      <div className="font-medium">Kullanıcı Adı</div>
      <div className="text-sm text-green-500">🟢 Çevrimiçi</div>
    </div>
  );
}
