// layouts/Base.tsx
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./Base.module.less";

function GlobalHeader() {
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
    </Layout.Header>
  );
}

function GlobalContent() {
  return (
    <Layout.Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        {/* outlet */}
        <Outlet />
      </div>
    </Layout.Content>
  );
}

function GlobalSider() {
  const navigate = useNavigate();
  return (
    <Layout.Sider
      className="site-slider"
      style={{ marginTop: 64 }}
      theme={"light"}
    >
      <Menu
        mode={"inline"}
        items={[
          {
            key: "home",
            label: "新闻",
            children: [
              {
                key: "about",
                label: "关于",
                onClick: () => navigate("/about"),
              },
              {
                key: "article",
                label: "文章",
                onClick: () => navigate("/article"),
              },
            ],
          },
        ]}
      />
    </Layout.Sider>
  );
}

function GlobalFooter() {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      用 vite 创建 react18 项目 KevinZhou
    </Layout.Footer>
  );
}

export default function Index() {
  return (
    <Layout style={{ height: "100%" }}>
      <GlobalHeader />
      <Layout hasSider={true}>
        <GlobalSider />
        <GlobalContent />
        <GlobalFooter />
      </Layout>
    </Layout>
  );
}
