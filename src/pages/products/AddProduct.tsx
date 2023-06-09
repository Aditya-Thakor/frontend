import { Button, Form } from "antd";
import {
  NavLink,
  Outlet,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { productField } from "../../utils/const";
import FormInput from "../../component/FormInput";
import { addProduct, updateProduct } from "../../axios/productApi";
import { addProductSchema } from "../../utils/yupValidation";
import { useEffect, useState } from "react";
import { singleProduct } from "../../axios/cartApi";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

type Data = {
  prod_title: string;
  prod_desc: string;
  prod_price: number;
  prod_category: string;
  prod_image: FileList | string | File | any;
  prod_img_name?: string;
  prod_id?: number | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

const initialValues = {
  prod_title: "",
  prod_desc: "",
  prod_price: 0,
  prod_category: "",
  prod_image: "",
};

const AddProduct = () => {
  const navigate = useNavigate();

  const [isRequestedData, setIsRequestedData] = useState<Data>(initialValues);
  const [form] = Form.useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  const prod_id = searchParams.get("prod_id");
  const mode = searchParams.get("mode");
  const [formMode, setFormMode] = useState<boolean>(false);

  const getSingleProductData = async (id: number | string) => {
    const res = await singleProduct(id as number);
    setIsRequestedData({ ...res.data, prod_image: "", prod_img_name: "" });
  };

  useEffect(() => {
    prod_id && getSingleProductData(prod_id);
    mode === "view" && setFormMode(true);
  }, []);

  const onFinish = async (data: Data) => {
    const { prod_image } = data;
    let res;
    if (prod_id) {
      res = await updateProduct({
        ...data,
        prod_image: prod_image.file,
        prod_id,
      });
    } else {
      res = await addProduct({ ...data, prod_image: prod_image.file });
    }
    res && navigate("/products");
  };

  // Intials
  const filelist = [
    {
      uid: prod_id || "1",
      name: isRequestedData.prod_img_name,
      status: "done",
      url: IMAGE_URL + isRequestedData.prod_image,
    },
  ];

  console.log(isRequestedData);

  prod_id ? form.setFieldsValue({ ...isRequestedData }) : form.resetFields();

  return (
    <div>
      <Outlet />
      <div className="navbar">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/product-list">Product List</NavLink>

        <NavLink to="/register">Register as User</NavLink>
      </div>
      <div className="component">
        <div className="section">
          <div className="title">
            <h1>{mode} Product</h1>
          </div>
          <Form
            encType="multipart/form-data"
            form={form}
            name="login"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            disabled={formMode}
          >
            {productField.map((field, i) => (
              <div key={i}>
                <FormInput
                  {...field}
                  filelist={prod_id && filelist}
                  schema={addProductSchema}
                />
              </div>
            ))}

            {mode !== "view" && (
              <div className="form-btn">
                <Form.Item>
                  <Button className="button" type="primary" htmlType="submit">
                    {mode} Product
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
