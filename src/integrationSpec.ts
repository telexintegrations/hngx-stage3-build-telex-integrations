export const integrationSpecSettings = {
  data: {
    date: {
      created_at: "2025-02-22",
      updated_at: "2025-02-22",
    },
    descriptions: {
      app_name: "Monitor Disk Space ",
      app_description:
        "Real-time disk space monitoring solution with threshold alerts and historical usage tracking",
      app_logo:
        "https://uploads.commoninja.com/searchengine/wordpress/disk-space-usage.png",
      app_url: "https://hngx-stage3-build-telex-integrations.vercel.app",
      background_color: "#fff",
    },
    is_active: true,
    integration_type: "interval",
    integration_category: "Monitoring & Logging",
    key_features: [
      "Real-time disk space monitoring",
      "Customizable alert thresholds",
      "Multi-platform support (Windows/Linux/macOS)",
      "Historical usage analytics",
    ],
    author: "Deborah Olatona",
    settings: [
      {
        label: "Interval",
        type: "text",
        required: true,
        default: "*/5 * * * *",
      },
      {
        label: "API Key",
        type: "text",
        required: true,
        default: "dsk-xxxxxxxxxxxxxxxx",
      },
      {
        label: "Check Interval (ms)",
        type: "number",
        required: true,
        default: "5000",
      },
      {
        label: "Alert Sensitivity",
        type: "dropdown",
        required: true,
        default: "medium",
        options: ["medium", "high", "low"],
      },
      {
        label: "Alert Recipients",
        type: "dropdown",
        required: true,
        default: "admin",
        options: ["admin", "super-admin", "it-manager"],
      },
    ],
    target_url:
      "",
    tick_url: "https://hngx-stage3-build-telex-integrations.vercel.app/tick",
  },
};
