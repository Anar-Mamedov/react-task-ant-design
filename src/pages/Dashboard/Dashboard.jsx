import { Outlet, useNavigate } from "react-router-dom";
import React from "react";

import {
  CheckSquareOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  HomeOutlined,
  PlusSquareOutlined,
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
      icon: <HomeOutlined />,
      label: "Əsas Səhifə",
      onClick: () => navigate("/contracts"),
    },
    {
      key: "2",
      icon: <CheckSquareOutlined />,
      label: "Təşkilat",
      onClick: () => navigate("/"),
    },
    {
      key: "3",
      icon: <CreditCardOutlined />,
      label: "Əməkhaqqı",
      onClick: () => navigate("/"),
    },
    {
      key: "4",
      icon: <FileTextOutlined />,
      label: "Satınalma",
      onClick: () => navigate("/"),
    },
    {
      key: "5",
      icon: <PlusSquareOutlined />,
      label: "Mühasibat uçotu",
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
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(189, 0, 0, 0.2)",
          }}
        />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
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
