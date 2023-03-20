// layouts/Base.tsx
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

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
    <Layout.Sider className="site-slider" style={{ marginTop: 64 }}>
      <Menu
        items={[
          {
            key: "home",
            label: "首页",
            onClick: () => navigate("/home"),
          },
          {
            key: "about",
            label: "关于",
            onClick: () => navigate("/about"),
          },
        ]}
      />
    </Layout.Sider>
  );
}

function GlobalFooter() {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      用 vite 创建 react18 项目 @带只拖鞋去流浪
    </Layout.Footer>
  );
}

export default function Index() {
  return (
    <Layout style={{ height: "100%" }}>
      <GlobalSider />
      <Layout>
        <GlobalHeader />
        <GlobalContent />
        <GlobalFooter />
      </Layout>
    </Layout>
  );
}
