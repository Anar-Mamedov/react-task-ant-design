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
    title: "İmzalayan şəxs",
    dataIndex: "signatory",
    sorter: (a, b) => a.signatory.localeCompare(b.signatory),
  },
  {
    title: "Təşkilatın imza tarixi",
    dataIndex: "dateofcompanysigature",
    sorter: (a, b) =>
      new Date(a.dateofcompanysigature) - new Date(b.dateofcompanysigature),
  },
  {
    title: "Müqavilənin imza tarixi",
    dataIndex: "dateofcontractsigature",
    sorter: (a, b) =>
      new Date(a.dateofcontractsigature) - new Date(b.dateofcontractsigature),
  },
  {
    title: "Elaqeli şəxs 1",
    dataIndex: "person1",
    sorter: (a, b) => a.person1.localeCompare(b.person1),
  },
  {
    title: "Elaqeli şəxs 2",
    dataIndex: "person2",
    sorter: (a, b) => a.person2.localeCompare(b.person2),
  },
  {
    title: "Qeyd",
    dataIndex: "note",
    sorter: (a, b) => a.note.localeCompare(b.note),
  },
];

export default function RequisiteTable() {
  const [data] = useState([
    {
      key: 1,
      signatory: "Vilayət Əmirli",
      dateofcompanysigature: "11.11.2023",
      dateofcontractsigature: "11.11.2023",
      person1: "Vilayət Əmirli",
      person2: "Kamil Əmirli",
      note: "lorem ipsum",
    },
    {
      key: 2,
      signatory: "Anar Mamedov",
      dateofcompanysigature: "11.11.2021",
      dateofcontractsigature: "11.11.2021",
      person1: "Anar Mamedov",
      person2: "Akif Qasımov",
      note: "lorem ipsum",
    },
    {
      key: 3,
      signatory: "Babek Əliyev",
      dateofcompanysigature: "11.11.2022",
      dateofcontractsigature: "11.11.2022",
      person1: "Babek Əliyev",
      person2: "Qabil Camalov",
      note: "lorem ipsum",
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
