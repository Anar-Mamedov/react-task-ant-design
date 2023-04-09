import React from "react";
import { Button, Space } from "antd";

export default function ActiveButton() {
  return (
    <Space wrap>
      <Button
        type="primary"
        ghost
        style={{ color: "#2bc770", borderColor: "#2bc770" }}
      >
        Aktiv
      </Button>
    </Space>
  );
}
