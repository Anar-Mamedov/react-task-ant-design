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
    title: "Məbləğ",
    dataIndex: "amount",
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: "ƏDV (%)",
    dataIndex: "tax",
    sorter: (a, b) => a.tax - b.tax,
  },
  {
    title: "ƏDV məbləği",
    dataIndex: "taxamount",
    sorter: (a, b) => a.taxamount - b.taxamount,
  },
  {
    title: "Zəmanət müddəti",
    dataIndex: "warrantyperiod",
    sorter: (a, b) => a.warrantyperiod - b.warrantyperiod,
  },
  {
    title: "Bank zəmanət məbləği",
    dataIndex: "bankguaranteeamount",
    sorter: (a, b) => a.bankguaranteeamount - b.bankguaranteeamount,
  },
  {
    title: "Zəmanət verən bank",
    dataIndex: "guaranteeingbank",
    sorter: (a, b) => a.guaranteeingbank.localeCompare(b.guaranteeingbank),
  },
  {
    title: "Bank zəmanət tarixi",
    dataIndex: "date",
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
];

export default function FinancialDetailsTable() {
  const [data] = useState([
    {
      key: 1,
      amount: 1000,
      tax: 18,
      taxamount: 180,
      warrantyperiod: "1",
      bankguaranteeamount: 1000,
      guaranteeingbank: "Access Bank",
      date: "11.11.2023",
    },
    {
      key: 2,
      amount: 2000,
      tax: 18,
      taxamount: 1000,
      warrantyperiod: "3",
      bankguaranteeamount: 700,
      guaranteeingbank: "Kapital Bank",
      date: "11.11.2021",
    },
    {
      key: 3,
      amount: 3000,
      tax: 14,
      taxamount: 360,
      warrantyperiod: "1",
      bankguaranteeamount: 1500,
      guaranteeingbank: "Express Bank",
      date: "11.11.2022",
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
