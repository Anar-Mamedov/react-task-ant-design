import React from "react";
import { Layout, theme } from "antd";
import Table from "./components/Table/Table";
import Breadcumb from "./components/Breadcumb";
import ToolBar from "../Toolbar/ToolBar";

const { Content } = Layout;

export default function Contracts() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "0px 16px 0",
        overflow: "initial",
      }}
    >
      <Breadcumb />
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
        }}
      >
        <ToolBar />
        <Table />
        {/* <p>long content</p>
        {
          // indicates very long content
          Array.from(
            {
              length: 100,
            },
            (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? "more" : "..."}
                <br />
              </React.Fragment>
            )
          )
        } */}
      </div>
    </Content>
  );
}
