import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

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

const logo = require("../../logo.png");

// styled-components

const CustomMenu = styled(Menu)`
  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #2bc770;
    color: #fff;
  }
  .ant-menu-submenu-title {
    color: #000 !important;
  }
  .ant-menu-inline {
    background: #00000000 !important;
  }
`;

// styled-components end

export default function Dashboard() {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Əsas Səhifə",
      onClick: () => navigate("/"),
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
      onClick: () => navigate("/contracts"),
      children: [
        {
          key: "7",
          icon: <CheckSquareOutlined />,
          label: "Kontragent",
          onClick: () => navigate("/"),
        },
        {
          key: "6",
          icon: <CheckSquareOutlined />,
          label: "Müqavilə",
          onClick: () => navigate("/"),
        },
        {
          key: "8",
          icon: <CheckSquareOutlined />,
          label: "Alış",
          onClick: () => navigate("/"),
        },
        {
          key: "9",
          icon: <CheckSquareOutlined />,
          label: "MİF",
          onClick: () => navigate("/"),
        },
        {
          key: "10",
          icon: <CheckSquareOutlined />,
          label: "Öhdəlik",
          onClick: () => navigate("/"),
        },
      ],
    },
    {
      key: "5",
      icon: <PlusSquareOutlined />,
      label: "Mühasibat uçotu",
      onClick: () => navigate("/"),
      children: [
        {
          key: "11",
          icon: <CheckSquareOutlined />,
          label: "Mühasibat uçotu",
          onClick: () => navigate("/"),
        },
      ],
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
            backgroundImage: `url(${logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: 32,
            margin: 16,
            // background: "rgba(0, 0, 0, 0.2)",
          }}
        />
        <CustomMenu
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
