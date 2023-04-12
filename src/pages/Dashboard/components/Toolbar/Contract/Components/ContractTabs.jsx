import { Space, Tabs } from "antd";
import React from "react";
import styled from "styled-components";
import FinancialDetailsTable from "./FinancialDetailsTable";
import RequisiteTable from "./RequisiteTable";
import DetailsTable from "./DetailsTable";
import DeliveryTable from "./DeliveryTable";

//styled components
const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    width: 165px;
    justify-content: center;
  }
  .ant-tabs-tab-active {
    background-color: #2bc77135;
    color: rgba(0, 0, 0, 0.88);
  }
  .ant-tabs-tab-btn {
    color: rgba(0, 0, 0, 0.88) !important;
  }
  .ant-tabs-ink-bar {
    background-color: #2bc770;
  }
`;

//styled components end

// tab
const { TabPane } = Tabs;

// Tab end

export default function ContractTabs() {
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        {/* tab */}

        <StyledTabs>
          <TabPane tab="Maliyyə detalları" key="1">
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "15px",
              }}
            >
              <FinancialDetailsTable />
            </div>
          </TabPane>
          <TabPane tab="Rekvizit" key="2">
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "15px",
              }}
            >
              <RequisiteTable />
            </div>
          </TabPane>
          <TabPane tab="Detallar" key="3">
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "15px",
              }}
            >
              <DetailsTable />
            </div>
          </TabPane>
          <TabPane tab="Çatdırılma" key="4">
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "15px",
              }}
            >
              <DeliveryTable />
            </div>
          </TabPane>
        </StyledTabs>
        {/* <Tabs defaultActiveKey="1" items={items} onChangeTab={onChangeTab} /> */}
      </div>
    </Space>
  );
}
