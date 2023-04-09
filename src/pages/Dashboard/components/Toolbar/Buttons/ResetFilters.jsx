import React from "react";
import { Button, Space } from "antd";

export default function ResetFilters() {
  return (
    <Space wrap>
      <Button type="primary" style={{ backgroundColor: "#babfc7" }}>
        Filtrləri sıfırla
      </Button>
    </Space>
  );
}
