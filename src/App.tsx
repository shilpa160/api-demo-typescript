import React, { useState, useEffect } from "react";

import "./App.css";
import { Table } from "antd";
import { validateHeaderValue } from "http";

interface DataType {
  title: string;
  description: string;
}
const columns = [
  {
    title: "Title",
    dataIndex: "name",
    key: "name",
    // render: text => <a>"John Brown"</a>,
  },
  {
    title: "Description",
    dataIndex: "address",
    key: "address",
     render: (_, record:any) => {console.log(record)},
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    // render: text => <a>"John Brown"</a>,
  },
];

function App() {
  const [value, setValue] = useState<[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setValue(json));
  }, []);

  console.log(value);

  return (
    <div className="App">
      <Table columns={columns} dataSource={value} />

    </div>
  );
}

export default App;
