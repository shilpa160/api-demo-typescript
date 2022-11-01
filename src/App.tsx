import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./App.css";
import { Button, Table } from "antd";
import { validateHeaderValue } from "http";

interface DataType {
  title: string;
  description: string;
}

function App() {
  const [value, setValue] = useState<[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setValue(json));
  }, []);

  const handleEdit = (id: Number) => {
    console.log("🚀 ~ file: App.tsx ~ line 22 ~ App ~ id", id);
    
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (data: any) => {
        return <li>{data}</li>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (data: any) => {
        return <li>{data.street + ", " + data.city}</li>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (data: any) => {
        return (
          <>
            <EditOutlined onClick={() => handleEdit(data.id)} />
            <DeleteOutlined />
          </>
        );
      },
    },
  ];

  // console.log(value);

  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={value}
        rowKey={(data: any) => {
          return data.id;
        }}
      />
    </div>
  );
}

export default App;
