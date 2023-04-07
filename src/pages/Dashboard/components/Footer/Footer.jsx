import { HeartOutlined } from "@ant-design/icons";
import { Layout } from "antd";

export default function Footer() {
  return (
    <Layout.Footer
      style={{
        // textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        COPYRIGHT © 2022{" "}
        <span style={{ color: " #00ce00" }}>Resource Planning</span>{" "}
      </div>
      <div>
        Hand-crafted & made with <HeartOutlined style={{ color: "red" }} />
      </div>
    </Layout.Footer>
  );
}
