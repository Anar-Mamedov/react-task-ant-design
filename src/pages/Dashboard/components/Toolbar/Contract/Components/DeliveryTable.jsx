import { Table as AntdTable } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "#",
    dataIndex: "key",
    sorter: (a, b) => a.key - b.key,
    width: 70,
  },
  {
    title: "Şərt",
    dataIndex: "condition",
    sorter: (a, b) => a.condition.localeCompare(b.condition),
  },
  {
    title: "Tarix",
    dataIndex: "date",
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    title: "Müddət",
    dataIndex: "duration",
    sorter: (a, b) => a.duration - b.duration,
  },
];

export default function DeliveryTable() {
  const [data] = useState([
    {
      key: 1,
      condition: "Lorem ipsum",
      date: "11.11.2023",
      duration: 1000,
    },
    {
      key: 2,
      condition: "Lorem ipsum",
      date: "11.11.2021",
      duration: 2000,
    },
    {
      key: 3,
      condition: "Lorem ipsum",
      date: "11.11.2022",
      duration: 3000,
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
