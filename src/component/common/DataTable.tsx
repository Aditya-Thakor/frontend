import { Table } from "antd";

type Props = {
  tableHeader: any;
  data?: any;
};
const DataTable = (props: Props) => {
  const { tableHeader, data } = props;

  return <Table columns={tableHeader} dataSource={data} />;
};

export default DataTable;
