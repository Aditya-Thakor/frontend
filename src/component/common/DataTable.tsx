import { Table } from "antd";
import { number } from "yup";

type Props = {
  tableHeader: any;
  data?: any;
};
const DataTable = (props: Props) => {
  const { tableHeader, data } = props;
  const generateRowKey: any = (data: any, i: number) => i.toString();

  return (
    <Table columns={tableHeader} dataSource={data} rowKey={generateRowKey} />
  );
};

export default DataTable;
