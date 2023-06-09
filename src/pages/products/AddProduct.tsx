import { Button, Form } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { productField } from "../../utils/const";
import FormInput from "../../component/FormInput";
import { addProduct } from "../../axios/productApi";
import { addProductSchema } from "../../utils/yupValidation";

import { useSelector } from "react-redux";
import { useEffect } from "react";

type data = {
  product_title: string;
  product_desc: string;
  product_price: number;
  product_category: string;
  product_image: FileList | string | File | any;
};

const AddProduct = () => {
  const isToken = useSelector((state: any) => state.authToken);
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = async (data: data) => {
    const {
      product_title,
      product_desc,
      product_price,
      product_category,
      product_image,
    } = data;

    const res = await addProduct({
      product_desc,
      product_image: product_image.file,
      product_price,
      product_title,
      product_category,
    });

    res && navigate("/products");
  };
  return (
    <div>
      <div className="navbar">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/">Users</NavLink>
        <NavLink to="/register">Register as User</NavLink>
      </div>
      <div className="component">
        <div className="section">
          <div className="title">
            <h1>Add Product</h1>
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
          >
            {productField.map((field, i) => (
              <div key={i}>
                <FormInput {...field} schema={addProductSchema} />
              </div>
            ))}
            <div className="form-btn">
              <Form.Item>
                <Button className="button" type="primary" htmlType="submit">
                  Add Product
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
