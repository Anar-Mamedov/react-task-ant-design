import React from "react";
import { Button, Space } from "antd";
import { FileExcelOutlined } from "@ant-design/icons";

export default function ExcellButton() {
  return (
    <Space wrap>
      <Button
        type="primary"
        ghost
        style={{ color: "#2bc770", borderColor: "#2bc770" }}
      >
        <FileExcelOutlined />
      </Button>
    </Space>
  );
}
