import React from "react";
import {
  Layout,
  theme,
  Button,
  Space,
  Tooltip,
  Divider,
  Input,
  Select,
  Avatar,
  Badge,
  Typography,
} from "antd";
import {
  CalendarOutlined,
  CheckSquareOutlined,
  MailOutlined,
  SearchOutlined,
  StarOutlined,
  WechatOutlined,
  AudioOutlined,
  ClockCircleOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Search from "antd/es/transfer/search";

const { Text, Link } = Typography;

const onSearch = (value) => console.log(value);

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{
        padding: "10px",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
          background: colorBgContainer,
          padding: "0 16px",
          height: "50px",
          gap: "10px",
        }}
      >
        <Button
          style={{ border: "0px" }}
          icon={<CheckSquareOutlined />}
          href=""
        />
        <Button style={{ border: "0px" }} icon={<WechatOutlined />} href="" />
        <Button style={{ border: "0px" }} icon={<MailOutlined />} href="" />
        <Button style={{ border: "0px" }} icon={<CalendarOutlined />} href="" />
        <Button
          style={{ border: "0px" }}
          icon={<StarOutlined style={{ color: "#efa207" }} />}
          href=""
        />
        <Divider type="vertical" />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 100,
          }}
        />
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Azerbaijan",
              label: (
                <>
                  <strong>icon</strong> Azerbaijan
                </>
              ),
            },
            {
              value: "English",
              label: "English",
            },
            {
              value: "Русский",
              label: "Русский",
            },
          ]}
        />
        <Badge size="small" count={5} style={{ backgroundColor: "#52c41a" }}>
          <ShoppingCartOutlined
            style={{
              fontSize: "20px",
            }}
            shape="square"
            size="large"
          />
        </Badge>
        <Badge size="small" count={5}>
          <BellOutlined
            style={{
              fontSize: "20px",
            }}
            shape="square"
            size="large"
          />
        </Badge>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "0px 0px 0px 5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                lineHeight: "10px",
                whiteSpace: "nowrap",
              }}
            >
              Anar Mamedov
            </Text>
            <span style={{ fontSize: "8px", lineHeight: "15px" }}>Admin</span>
          </div>
          <Avatar size="smal" icon={<UserOutlined />} />
        </div>
      </div>
    </Layout.Header>
  );
}
