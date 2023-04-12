import { Table as AntdTable, Tag } from "antd";
import { useState } from "react";

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
    title: "Nömrə",
    dataIndex: "number",
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (_, { status }) => <Tag color={getColor(status)}>{status}</Tag>,
  },
];

export default function Table() {
  const [data, setData] = useState([
    {
      key: 1,
      number: 1000,
      status: "Qaralama",
    },
    {
      key: 2,
      number: 2000,
      status: "Qaralama",
    },
    {
      key: 3,
      number: 3000,
      status: "Təsdiqləndi",
    },
    {
      key: 4,
      number: 4000,
      status: "Təsdiqləndi",
    },
    {
      key: 5,
      number: 5000,
      status: "Ləğv edildi",
    },
    {
      key: 6,
      number: 6000,
      status: "Ləğv edildi",
    },
    {
      key: 7,
      number: 7000,
      status: "Gözləmədə",
    },
    {
      key: 8,
      number: 8000,
      status: "Gözləmədə",
    },
  ]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
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
    />
  );
}
