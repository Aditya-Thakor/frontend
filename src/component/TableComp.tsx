// import { useEffect, useState, MouseEvent } from "react";
// import { Card, Col, Row } from "antd";
// import FormInputs from "./FormInputs";

// interface TableProps {
//   data: any[];
//   tableHeader: object;
//   headLabel?: string;
// }

// const TableComp = ({ data, tableHeader, headLabel }: TableProps) => {
//   const [dataset, setDataset] = useState(data);

//   Object.values(data).map((item) => {
//     console.log(item);
//   });

//   return (
//     <div className="table-comp">
//       {headLabel && headLabel !== "undefined" && (
//         <h4 className="head-label">{headLabel}</h4>
//       )}
//       <table className="table table-borderless">
//         <thead>
//           <tr>
//             {Object.entries(tableHeader).map(([key, value], i) => (
//               <th key={i}>{value}</th>
//             ))}
//           </tr>
//         </thead>
//         {Object.keys(data).length > 0 && (
//           <tbody>
//             <tr>
//               {Object.values(data).map((value, i) => (
//                 <td key={i}>{value}</td>
//               ))}
//             </tr>
//           </tbody>
//         )}
//       </table>

//       {data.length === 0 && (
//         <nav className="navbar navbar-light bg-light alignment">
//           <span className="navbar-text">No data</span>
//         </nav>
//       )}

//       <Row gutter={16}>
//         <Col span={8}>
//           <Card title="Card title" bordered={false}>
//             Card content
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card title="Card title" bordered={false}>
//             Card content
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card title="Card title" bordered={false}>
//             Card content
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default TableComp;
import React, { useState } from "react";
import { InputNumber, Space } from "antd";
import { Divider, Radio, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import FormInput from "./FormInput";

interface DataType {
  key: React.Key;
  prod_name: string;
  id: number;
  price: string;
  element?: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "id",
  },
  {
    title: "Product Name",
    dataIndex: "prod_name",
  },
  {
    title: "Product Price",
    dataIndex: "price",
  },
  {
    title: "Product QTy",
    dataIndex: "element",
  },
];

const onChange = (value: any): any => {
  console.log("changed", value);
};

const data: DataType[] = [
  {
    key: "1",
    prod_name: "John Brown",
    id: 32,
    price: "20000",
    element: (
      <Space>
        <InputNumber
          defaultValue={1}
          maxLength={100}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value): any => value!.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
        />
      </Space>
    ),
  },
  {
    key: "1",
    prod_name: "John Brown",
    id: 32,
    price: "50000",
    element: (
      <Space>
        <InputNumber
          defaultValue={1}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value): any => value!.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
        />
      </Space>
    ),
  },
  {
    key: "1",
    prod_name: "John Brown",
    id: 32,
    price: "50000",
    element: (
      <Space>
        <InputNumber
          defaultValue={1}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value): any => value!.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
        />
      </Space>
    ),
  },
  {
    key: "1",
    prod_name: "John Brown",
    id: 32,
    price: "50000",
    element: (
      <Space>
        <InputNumber
          defaultValue={1}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value): any => value!.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
        />
      </Space>
    ),
  },
];

const TableComp: React.FC = (): any => {
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className="total-amount">
        <span className="label success">Total : 25000</span>
      </div>
    </div>
  );
};

export default TableComp;
