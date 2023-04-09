import React from "react";
import { Button, Space } from "antd";
import { PrinterOutlined } from "@ant-design/icons";

export default function PrintButton() {
  return (
    <Space wrap>
      <Button
        type="primary"
        ghost
        style={{ color: "#2d2d2d", borderColor: "#babfc7" }}
      >
        <PrinterOutlined />
      </Button>
    </Space>
  );
}
