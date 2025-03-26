// src/hooks/useMockConfig.ts

import { useEffect, useState } from "react";
import { mockConfig } from "../mock/mock.config";

export function useMockConfig() {
  const [config, setConfig] = useState<typeof mockConfig | null>(null);

  useEffect(() => {
    // API yerine mock veriyi simüle ediyoruz
    const fetchMockData = async () => {
      // async olsun ki ileride API’ye geçiş kolay olsun
      await new Promise((res) => setTimeout(res, 500));
      setConfig(mockConfig);
    };

    fetchMockData();
  }, []);

  return config;
}
