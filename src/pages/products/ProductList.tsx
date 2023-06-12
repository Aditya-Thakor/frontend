import { Image, Space } from "antd";
import DataTable from "../../component/common/DataTable";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { dateFormatter } from "../../utils/helper";
import { viewProducts } from "../../axios/productApi";
import { useSelector } from "react-redux";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

const ProductList = () => {
  const [productData, setProductData] = useState<any[]>([]);
  const { permission } = useSelector((state: any) => state.rolestate);

  const productHeader: ColumnsType<any> = [
    {
      title: "#",
      dataIndex: "prod_id",
      key: "prod_id",
    },
    {
      title: "Name",
      dataIndex: "prod_title",
      key: "prod_title",
    },
    {
      title: "Price",
      dataIndex: "prod_price",
      key: "prod_price",
    },
    {
      title: "Category",
      dataIndex: "prod_category",
      key: "prod_category",
    },

    {
      title: "Image",
      dataIndex: "prod_image",
      key: "prod_image",
      render: (imageUrl) => <Image src={IMAGE_URL + imageUrl} width={100} />,
    },
    {
      title: "Add Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Update Date",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Action",
      key: "action",
      render: (_, data) => (
        <Space size="middle">
          <Link to={"/products/" + data.prod_id}>View</Link>
          {permission.includes("edit") && (
            <Link to={"/products/edit/" + data.prod_id}>Edit</Link>
          )}
          <Link to={"/"}> Delete</Link>
        </Space>
      ),
    },
  ];
  const listProduct = async () => {
    const res = await viewProducts();
    const { data }: any = res;

    const arr = data.map((item: any, i: number) => {
      const create_date = dateFormatter(item.createdAt);
      const update_date = dateFormatter(item.updatedAt);

      return {
        ...item,
        createdAt: create_date,
        updatedAt: update_date,
        prod_price: "₹" + item.prod_price,
      };
    });
    setProductData(() => arr);
  };

  useEffect(() => {
    listProduct();
  }, []);

  return productData?.length > 0 ? (
    <DataTable tableHeader={productHeader} data={productData} />
  ) : (
    <DataTable tableHeader={productHeader} />
  );
};

export default ProductList;
