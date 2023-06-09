import { useEffect, useState } from "react";
import { showAdmin } from "../../axios/adminApi";
import DataTable from "../../component/common/DataTable";
import { Space } from "antd";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { dateFormatter } from "../../utils/helper";

interface DataType {
  admin_email: string;
  admin_name: string;
  admin_password: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  id: number | string;
}
const adminHeader: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "id",
    key: "admin_id",
  },
  {
    title: "Name",
    dataIndex: "admin_name",
    key: "admin_name",
  },
  {
    title: "Email",
    dataIndex: "admin_email",
    key: "admin_email",
  },
  {
    title: "Role",
    dataIndex: "admin_role",
    key: "admin_role",
  },
  {
    title: "Create At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Action",
    key: "action",
    render: (_, data) => (
      <Space size="middle">
        <Link to={"/admin/edit-admin?admin_id=" + data.id + "&&mode=view"}>
          View
        </Link>
        <Link to={"/admin/edit-admin?admin_id=" + data.id + "&&mode=edit"}>
          Edit
        </Link>
        <Link to={"/admin"}>Delete</Link>
      </Space>
    ),
  },
];

const AdminList = () => {
  const [adminData, setAdminData] = useState<DataType[]>([]);

  const listAdmin = async () => {
    const res = await showAdmin();
    const { data }: any = res;
    // dateFormatter()

    const arr = data.map((item: DataType, i: number) => {
      const date = dateFormatter(item.createdAt);
      return { ...item, createdAt: date };
    });

    setAdminData(() => arr);
  };

  useEffect(() => {
    listAdmin();
  }, []);

  return adminData?.length > 0 ? (
    <DataTable tableHeader={adminHeader} data={adminData} />
  ) : (
    <DataTable tableHeader={adminHeader} />
  );
};

export default AdminList;
