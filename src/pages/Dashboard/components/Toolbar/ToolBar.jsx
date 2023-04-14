import React from "react";
import RadioButton from "./Buttons/RadioButton";
import PrintButton from "./Buttons/PrintButton";
import ExcellButton from "./Buttons/ExcellButton";
import AddNewButton from "./Buttons/AddNewButton";
import ResetFilters from "./Buttons/ResetFilters";
import { Content } from "antd/es/layout/layout";

export default function ToolBar() {
  return (
    <Content
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: "10px 0px 20px 0px",
      }}
    >
      <RadioButton />
      <ResetFilters />
      <PrintButton />
      <ExcellButton />
      <AddNewButton />
    </Content>
  );
}
