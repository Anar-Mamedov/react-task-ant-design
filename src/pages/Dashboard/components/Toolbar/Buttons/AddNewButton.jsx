import React from "react";
import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import styled from "styled-components";
import MainInformation from "../Components/MainInformation";

const StyledDrawer = styled(Drawer)`
  & .ant-drawer-header {
    border-bottom: none;
  }
  .ant-drawer-close {
    display: none;
  }
`;

export default function AddNewButton() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={showLargeDrawer}
          style={{ backgroundColor: "#2bc770" }}
        >
          + Yeni
        </Button>
      </Space>
      <StyledDrawer
        closeIcon={null}
        title={`Yeni`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        width={"80%"}
        extra={
          <Space
            style={{
              position: "absolute",
              right: 20,
              bottom: 20,
            }}
          >
            <Button
              type="primary"
              onClick={onClose}
              style={{ backgroundColor: "#2bc770" }}
            >
              Yadda saxla
            </Button>
            <Button
              onClick={onClose}
              style={{ color: "#2bc770", borderColor: "#2bc770" }}
            >
              Ləğv et
            </Button>
          </Space>
        }
      >
        <MainInformation />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </StyledDrawer>
    </>
  );
}
