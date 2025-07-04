import { App, ConfigProvider } from "antd";

export default function CustomConfigProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "var(--text-color)",
          colorPrimary: "var(--color-brand-primary)",
        },
        components: {
          Layout: {
            headerBg: "var(--background-color)",
            headerPadding: 0,
            headerHeight: "auto",
            bodyBg: "var(--background-color)",
            footerBg: "var(--background-color)",
          },
          Menu: {
            itemBg: "var(--background-color)",
            itemColor: "var(--text-color)",
            itemHoverColor: "var(--color-brand-primary-lighter)",
            itemSelectedColor: "var(--color-brand-primary-lighter)",
            // itemHoverBg: "var(--color-brand-primary)",
            horizontalItemHoverColor: "var(--color-brand-primary-lighter)",
            horizontalItemSelectedColor: "var(--color-brand-primary-lighter)",
            horizontalLineHeight: "40px !important",
            groupTitleColor: "var(--text-color)",
          },
          Table: {
            headerBg: "var(--table-header-bg)",
            borderColor: "var(--table-border-color)",
            rowHoverBg: "transparent",
            // headerBorderRadius: 0,
            headerColor: "white",
          },
          Tabs: {
            cardGutter: 0,
          },
          Upload: {
            actionsColor: "var(--color-brand-primary)",
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
