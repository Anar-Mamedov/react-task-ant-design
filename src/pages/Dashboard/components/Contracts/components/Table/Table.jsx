import { Table as AntdTable, Tag } from "antd";
import { useState } from "react";
import ContractDrawer from "./components/ContractDrawer";
import { FormOutlined } from "@ant-design/icons";

export const getColor = (status) => {
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
    filterMode: "tree",
    filterSearch: true,
    onFilter: ([min, max], record) =>
      record.number >= min && record.number <= max,
    filters: [
      {
        text: "1-1000",
        value: [1, 1000],
      },
      {
        text: "1001-2000",
        value: [1001, 2000],
      },
    ],
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
      edit: <FormOutlined />,
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
      edit: <FormOutlined />,
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
      edit: <FormOutlined />,
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
      edit: <FormOutlined />,
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
      edit: <FormOutlined />,
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
      edit: <FormOutlined />,
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
      edit: <FormOutlined />,
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
      edit: <FormOutlined />,
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
      <ContractDrawer
        selectedRow={selectedRow}
        onDrawerClose={onDrawerClose}
        drawerVisible={drawerVisible}
      />
    </>
  );
}
