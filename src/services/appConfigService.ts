export type AppConfig = {
  theme: "light" | "dark";
};

const initAppConfig: AppConfig = {
  theme: "light",
};

export const appConfigService = {
  get: (): AppConfig => {
    try {
      // return initAppConfig; // block dark mode
      return (
        JSON.parse(localStorage.getItem("app_config") || "") || initAppConfig
      );
    } catch (e) {
      return initAppConfig;
    }
  },
  getItem: <TKey extends keyof AppConfig>(key: TKey): AppConfig[TKey] => {
    return appConfigService.get()[key];
  },
  setItem: (key: keyof AppConfig, value: AppConfig[keyof AppConfig]) => {
    const appConfig = appConfigService.get();
    localStorage.setItem(
      "app_config",
      JSON.stringify({ ...appConfig, [key]: value })
    );
  },
};
