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

export default function DetailsTable() {
  const [data] = useState([
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
