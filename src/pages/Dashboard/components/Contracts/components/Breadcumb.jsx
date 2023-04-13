import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const customNames = {
  dashboard: "Əsas Səhifə",
  contracts: "Müqavilə",
};

export default function Breadcumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const customName = customNames[snippet] || snippet;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{customName}</Link>
      </Breadcrumb.Item>
    );
  });
  const lastItem = (
    <Breadcrumb.Item style={{ color: "#000000" }}>
      <span>
        {customNames[pathSnippets[pathSnippets.length - 1]] ||
          pathSnippets[pathSnippets.length - 1]}
      </span>
    </Breadcrumb.Item>
  );
  return (
    <Breadcrumb style={{ margin: "16px 0" }} separator={<RightOutlined />}>
      <Breadcrumb.Item>
        <Link to="/">
          <HomeOutlined style={{ color: "#52c41a" }} />
        </Link>
      </Breadcrumb.Item>
      {breadcrumbItems.slice(0, -1)}
      {lastItem}
    </Breadcrumb>
  );
}
