import React from "react";
import {
  Layout,
  theme,
  Button,
  Divider,
  Select,
  Avatar,
  Badge,
  Typography,
  Input,
} from "antd";
import {
  CalendarOutlined,
  CheckSquareOutlined,
  MailOutlined,
  StarOutlined,
  WechatOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Text } = Typography;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

// styled-components
const CustomSelect = styled(Select)`
  .ant-select-selector {
    border: none !important;
  }
`;
//for search input
const SearchInput = styled(Input)`
  &&& {
    border: none;
    border-radius: 20px;
    box-shadow: none;
    padding-left: 1px;
  }

  &&& .ant-input-suffix {
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 11px;
    border-radius: 0 20px 20px 0;
  }
`;
// styled-components end

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
        <SearchInput placeholder="Axtarış..." prefix={<SearchOutlined />} />
        <CustomSelect
          defaultValue="Azerbaijan"
          style={{
            width: 200,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Azerbaijan",
              label: (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 1200 600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_2)">
                        <path d="M1200 0H0V600H1200V0Z" fill="#509E2F" />
                        <path d="M1200 0H0V400H1200V0Z" fill="#EF3340" />
                        <path d="M1200 0H0V200H1200V0Z" fill="#00B5E2" />
                        <path
                          d="M570 390C619.706 390 660 349.706 660 300C660 250.294 619.706 210 570 210C520.294 210 480 250.294 480 300C480 349.706 520.294 390 570 390Z"
                          fill="white"
                        />
                        <path
                          d="M590 375C631.421 375 665 341.421 665 300C665 258.579 631.421 225 590 225C548.579 225 515 258.579 515 300C515 341.421 548.579 375 590 375Z"
                          fill="#EF3340"
                        />
                        <path
                          d="M670 250L679.567 276.903L705.355 264.645L693.097 290.433L720 300L693.097 309.567L705.355 335.355L679.567 323.097L670 350L660.433 323.097L634.645 335.355L646.903 309.567L620 300L646.903 290.433L634.645 264.645L660.433 276.903L670 250Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2">
                          <rect width="1200" height="600" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Azerbaijan
                  </div>
                </>
              ),
            },
            {
              value: "English",
              label: (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 1000 600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_2)">
                        <path d="M0 0V600H1000V0H0Z" fill="#012169" />
                        <path d="M0 0L1000 600ZM1000 0L0 600Z" fill="black" />
                        <path
                          d="M0 0L1000 600M1000 0L0 600"
                          stroke="white"
                          stroke-width="120"
                        />
                        <mask
                          id="mask0_4_2"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="1000"
                          height="600"
                        >
                          <path
                            d="M500 300H1000V600L500 300ZM500 300V600H0L500 300ZM500 300H0V0L500 300ZM500 300V0H1000L500 300Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_4_2)">
                          <path d="M0 0L1000 600ZM1000 0L0 600Z" fill="black" />
                          <path
                            d="M0 0L1000 600M1000 0L0 600"
                            stroke="#C8102E"
                            stroke-width="80"
                          />
                        </g>
                        <path
                          d="M-20 220H420V-20H580V220H1020V380H580V620H420V380H-20V220Z"
                          fill="#C8102E"
                          stroke="white"
                          stroke-width="40"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_2">
                          <rect width="1000" height="600" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    English
                  </div>
                </>
              ),
            },
            {
              value: "Русский",
              label: (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 900 600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_10)">
                        <path d="M900 0H0V300H900V0Z" fill="white" />
                        <path d="M900 300H0V600H900V300Z" fill="#D52B1E" />
                        <path d="M900 200H0V400H900V200Z" fill="#0039A6" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_10">
                          <rect width="900" height="600" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Русский
                  </div>
                </>
              ),
            },
          ]}
        />
        <Button
          shape="circle"
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            marginRight: "5px",
          }}
        >
          <Badge count={5} style={{ backgroundColor: "#52c41a" }}>
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
          </Badge>
        </Button>
        <Button
          shape="circle"
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            marginRight: "5px",
          }}
        >
          <Badge count={5}>
            <BellOutlined style={{ fontSize: "24px" }} />
          </Badge>
        </Button>
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
