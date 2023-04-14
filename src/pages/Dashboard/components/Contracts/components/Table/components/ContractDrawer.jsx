import { Drawer, Typography, Space, Button } from "antd";
import styled from "styled-components";
import ContractTabs from "../../../../Toolbar/Contract/Components/ContractTabs";
import { getColor } from "../Table";
import { EnterOutlined, FormOutlined } from "@ant-design/icons";

const { Text } = Typography;

const StyledDrawer = styled(Drawer)`
  & .ant-drawer-header {
    border-bottom: none;
  }
  .ant-drawer-close {
    display: none;
  }
`;

export default function ContractDrawer({
  onDrawerClose,
  drawerVisible,
  selectedRow,
}) {
  return (
    <StyledDrawer // render Drawer component
      title="Müqavilə" // set title prop
      placement="right" // set placement prop
      closable={true} // set closable prop
      onClose={onDrawerClose} // pass onClose handler
      visible={drawerVisible} // pass visible prop
      width={900} // set width prop
    >
      {selectedRow && ( // render selected row data if any
        <div>
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text type="success">Əsas məlumatlar:</Text>
            <p>
              <Text type="secondary">Status:</Text>{" "}
              <span
                style={{
                  backgroundColor: `rgba(${
                    getColor(selectedRow.status) === "grey"
                      ? "128,128,128"
                      : getColor(selectedRow.status) === "green"
                      ? "0,128,0"
                      : getColor(selectedRow.status) === "red"
                      ? "255,0,0"
                      : getColor(selectedRow.status) === "orange"
                      ? "255,165,0"
                      : "128,128,128"
                  }, 0.5)`,
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
              >
                {selectedRow.status}{" "}
              </span>
            </p>
          </Space>
          <Space
            style={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "0px",
              columnGap: "25px",
              marginBottom: "20px",
            }}
          >
            <p>
              <Text type="secondary">Təşkilat:</Text> {selectedRow.company}
            </p>
            <p>
              <Text type="secondary">Kontragent:</Text>{" "}
              {selectedRow.counterparty}
            </p>
            <p>
              <Text type="secondary">Növ:</Text> {selectedRow.type}
            </p>
            <p>
              <Text type="secondary">Nömrə:</Text> {selectedRow.number}
            </p>
            <p>
              <Text type="secondary">Tarix:</Text> {selectedRow.date}
            </p>
            <p>
              <Text type="secondary">Predmet:</Text> {selectedRow.subject}
            </p>
            <p>
              <Text type="secondary">Ödəniş növü:</Text> {selectedRow.payment}
            </p>
            <p>
              <Text type="secondary">Başlama tarixi:</Text>{" "}
              {selectedRow.startdate}
            </p>
            <p>
              <Text type="secondary">Bitmə tarixi:</Text> {selectedRow.enddate}
            </p>
          </Space>
          <ContractTabs />
          <Button
            onClick={onDrawerClose}
            style={{
              color: "#2bc770",
              borderColor: "#2bc770",
              position: "absolute",
              right: 20,
              bottom: 20,
            }}
          >
            Bağla
          </Button>
          <div
            style={{
              display: "flex",
              gap: "15px",
              position: "absolute",
              right: 20,
              top: 20,
            }}
          >
            <Button
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#2bc770",
                color: "#2bc770",
              }}
            >
              <EnterOutlined style={{ rotate: "180deg" }} />
              Təsdiq üçün göndər
            </Button>
            <Button
              style={{
                backgroundColor: "#2bc770",
                borderColor: "#2bc770",
                color: "#ffffff",
              }}
            >
              Düzəliş et
              <FormOutlined />
            </Button>
          </div>
        </div>
      )}
    </StyledDrawer>
  );
}
