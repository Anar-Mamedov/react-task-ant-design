import { Table as AntdTable, Tag, Drawer, Typography, Space } from "antd";
import { useState } from "react";
import ContractTabs from "../../../Toolbar/Contract/Components/ContractTabs";

const { Text } = Typography;

const getColor = (status) => {
  switch (status) {
    case "Qaralama":
      return "grey";
    case "Təsdiqləndi":
      return "green";
    case "Ləğv edildi":
      return "red";
    case "Gözləmədə":
      return "orange";
    default:
      return "grey";
  }
};

const columns = [
  {
    title: "#",
    dataIndex: "key",
    sorter: (a, b) => a.key - b.key,
    width: 70,
  },
  {
    title: "NÖMRƏ",
    dataIndex: "number",
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: "TƏŞKİLAT",
    dataIndex: "company",
    sorter: (a, b) => a.company.localeCompare(b.company),
  },
  {
    title: "KONTRAGENT",
    dataIndex: "counterparty",
    sorter: (a, b) => a.counterparty.localeCompare(b.counterparty),
  },
  {
    title: "NÖV",
    dataIndex: "type",
    sorter: (a, b) => a.type.localeCompare(b.type),
  },
  {
    title: "TARİX",
    dataIndex: "date",
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    title: "PREDMET",
    dataIndex: "subject",
    sorter: (a, b) => a.subject.localeCompare(b.subject),
  },
  {
    title: "ÖDƏNİŞ NÖVÜ",
    dataIndex: "payment",
    sorter: (a, b) =>
      parseFloat(a.payment.replace(",", ".")) -
      parseFloat(b.payment.replace(",", ".")),
  },
  {
    title: "STATUS",
    dataIndex: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (_, { status }) => <Tag color={getColor(status)}>{status}</Tag>,
  },
  {
    title: "BAŞLAMA TARİXİ",
    dataIndex: "startdate",
    sorter: (a, b) => new Date(a.startdate) - new Date(b.startdate),
  },
  {
    title: "BİTİŞ TARİXİ",
    dataIndex: "enddate",
    sorter: (a, b) => new Date(a.enddate) - new Date(b.enddate),
  },
  {
    title: "DÜZƏLİŞ ET",
    dataIndex: "edit",
  },
];

export default function Table() {
  const [data] = useState([
    {
      key: 1,
      number: 1000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Qaralama",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
    {
      key: 2,
      number: 2000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Qaralama",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
    {
      key: 3,
      number: 3000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Təsdiqləndi",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
    {
      key: 4,
      number: 4000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Təsdiqləndi",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
    {
      key: 5,
      number: 5000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Ləğv edildi",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
    {
      key: 6,
      number: 6000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Ləğv edildi",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
    {
      key: 7,
      number: 7000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Gözləmədə",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
    {
      key: 8,
      number: 8000,
      company: "AT-Geotech MMC",
      counterparty: "Resource Planing QSC",
      type: "Lorem ipsum",
      date: "01.04.2023",
      subject: "Lorem ipsum",
      payment: "Lorem ipsum",
      status: "Gözləmədə",
      startdate: "01.04.2023",
      enddate: "01.04.2023",
      edit: "Lorem ipsum",
    },
  ]);

  const [drawerVisible, setDrawerVisible] = useState(false); // state for controlling drawer visibility
  const [selectedRow, setSelectedRow] = useState(null); // state for storing selected row data

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onRowClick = (record) => {
    // handler for row click
    setDrawerVisible(true); // open drawer
    setSelectedRow(record); // store selected row data
  };

  const onDrawerClose = () => {
    // handler for drawer close
    setDrawerVisible(false); // close drawer
    setSelectedRow(null); // clear selected row data
  };

  return (
    <>
      <AntdTable
        size="small"
        pagination={false}
        columns={columns}
        onChange={onChange}
        dataSource={data}
        rowSelection={true}
        scroll={{
          x: "100vw",
          y: 500,
        }}
        onRow={(record) => ({
          // pass onRow prop to Table
          onClick: () => onRowClick(record), // call onRowClick handler with record
        })}
      />
      <Drawer // render Drawer component
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
                <Text type="secondary">Bitmə tarixi:</Text>{" "}
                {selectedRow.enddate}
              </p>
            </Space>
            <ContractTabs />
          </div>
        )}
      </Drawer>
    </>
  );
}
