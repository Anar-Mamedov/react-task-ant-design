import { Outlet, useNavigate } from "react-router-dom";
import React from "react";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const { Sider } = Layout;

export default function Dashboard() {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Muqavileler",
      onClick: () => navigate("/contracts"),
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
      onClick: () => navigate("/"),
    },
  ];

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <p>deeme</p>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
        <p>deneme 2</p>
      </Sider>

      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header />

        <Outlet />

        <Footer />
      </Layout>
    </Layout>
  );
}
