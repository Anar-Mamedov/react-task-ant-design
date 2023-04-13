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
    title: "Məhsul",
    dataIndex: "product",
    sorter: (a, b) => a.product.localeCompare(b.product),
  },
  {
    title: "Ölçü vahidi",
    dataIndex: "measure",
    sorter: (a, b) => a.measure.localeCompare(b.measure),
  },
  {
    title: "Miqdar",
    dataIndex: "quantity",
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: "Qiymət",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "ƏDV (%)",
    dataIndex: "tax",
    sorter: (a, b) => a.tax - b.tax,
  },
];

export default function DetailsTable() {
  const [data] = useState([
    {
      key: 1,
      product: "Kağız",
      measure: "Paçka",
      quantity: 5,
      price: 100,
      tax: 18,
    },
    {
      key: 2,
      product: "Qələm",
      measure: "Ədəd",
      quantity: 10,
      price: 200,
      tax: 14,
    },
    {
      key: 3,
      product: "Monitor",
      measure: "Ədəd",
      quantity: 2,
      price: 50,
      tax: 18,
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
